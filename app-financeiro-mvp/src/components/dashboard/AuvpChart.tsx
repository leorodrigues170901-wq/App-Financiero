'use client';

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const categoriasConfig = [
  { nome: 'Essencial', percentual: 0.40, tipo: 'Teto', corForte: '#3b82f6', corFraca: '#dbeafe' },
  { nome: 'Investimento', percentual: 0.25, tipo: 'Piso', corForte: '#10b981', corFraca: '#d1fae5' },
  { nome: 'Conforto', percentual: 0.10, tipo: 'Teto', corForte: '#06b6d4', corFraca: '#cffafe' },
  { nome: 'Prazer', percentual: 0.10, tipo: 'Teto', corForte: '#a855f7', corFraca: '#f3e8ff' },
  { nome: 'Meta Planejada', percentual: 0.05, tipo: 'Piso', corForte: '#6366f1', corFraca: '#e0e7ff' },
  { nome: 'Oportunidade', percentual: 0.05, tipo: 'Teto', corForte: '#f59e0b', corFraca: '#fef3c7' },
  { nome: 'Aumentar Renda', percentual: 0.05, tipo: 'Piso', corForte: '#f43f5e', corFraca: '#ffe4e6' }
];

export default function AuvpChart() {
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  
  const [membrosAtivos, setMembrosAtivos] = useState<any[]>([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<string>('');
  
  const [mesesDisponiveis, setMesesDisponiveis] = useState<{ value: string, label: string }[]>([]);
  const [mesAnoSelecionado, setMesAnoSelecionado] = useState<string>('');
  
  const [receitas, setReceitas] = useState<any[]>([]);
  const [despesas, setDespesas] = useState<any[]>([]);

  const getChaveMesAno = (dataString: string) => {
    if (!dataString) return "";
    // Pega exatamente "YYYY-MM" do formato "YYYY-MM-DDTHH..."
    return dataString.substring(0, 7); 
  };

  // 1. FETCH INICIAL: Membros e Meses Disponíveis
  useEffect(() => {
    async function fetchMetadata() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: membroFamily } = await supabase
        .from('membros_familia')
        .select('familia_id')
        .eq('perfil_id', user.id)
        .maybeSingle();

      const familiaId = membroFamily?.familia_id;
      let profilesData: any[] = [];

      if (familiaId) {
        const { data: membersList } = await supabase
          .from('membros_familia')
          .select('perfil_id, perfis(id, nome_usuario)')
          .eq('familia_id', familiaId);
        
        profilesData = membersList?.filter((m: any) => m.perfis).map((m: any) => ({
          id: m.perfis?.id,
          nome: m.perfis?.nome_usuario || 'Usuário',
        })) || [];
      } else {
        const { data: p } = await supabase.from('perfis').select('id, nome_usuario').eq('id', user.id).single();
        if (p) profilesData = [{ id: p.id, nome: p.nome_usuario || 'Você' }];
      }
      
      setMembrosAtivos(profilesData);
      if (profilesData.length > 0) {
        setUsuarioSelecionado(user.id);
      }

      // Fetch lightweight para datas
      let queryDespesas = supabase.from('despesas').select('data');
      if (familiaId) queryDespesas = queryDespesas.eq('familia_id', familiaId);
      else queryDespesas = queryDespesas.eq('perfil_id', user.id);
      
      const { data: datas } = await queryDespesas;
      
      const mesesSet = new Set<string>();
      if (datas) {
        datas.forEach(d => {
          const key = getChaveMesAno(d.data);
          if (key) mesesSet.add(key);
        });
      }
      
      const hoje = new Date();
      mesesSet.add(`${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}`);
      
      const mesesArray = Array.from(mesesSet).sort().reverse();
      const opcoesMeses = mesesArray.map(m => {
        const [ano, mes] = m.split('-');
        return { value: m, label: `${mes}/${ano}` };
      });
      
      setMesesDisponiveis(opcoesMeses);
      if (opcoesMeses.length > 0) {
        setMesAnoSelecionado(opcoesMeses[0].value);
      }
      
      setLoadingInitial(false);
    }
    fetchMetadata();
  }, []);

  // 2. FETCH DE DADOS
  useEffect(() => {
    async function fetchMonthData() {
      if (!usuarioSelecionado || !mesAnoSelecionado) return;
      setLoadingData(true);
      
      const startDate = `${mesAnoSelecionado}-01`;
      const endDate = `${mesAnoSelecionado}-31`;

      const [resReceitas, resDespesas] = await Promise.all([
        supabase.from('receitas')
          .select('*')
          .eq('perfil_id', usuarioSelecionado)
          .gte('data', startDate)
          .lte('data', endDate),
        supabase.from('despesas')
          .select('*')
          .gte('data', startDate)
          .lte('data', endDate)
      ]);

      setReceitas(resReceitas.data || []);
      setDespesas(resDespesas.data || []);
      setLoadingData(false);
    }
    fetchMonthData();
  }, [usuarioSelecionado, mesAnoSelecionado]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const formatYAxis = (tickItem: number) => {
    if (tickItem >= 1000) return `R$ ${(tickItem / 1000).toFixed(1).replace('.0', '')}k`;
    return `R$ ${tickItem}`;
  };

  const getValorRateado = (despesa: any, filtroId: string) => {
    const valorTotal = Number(despesa.valor || 0);
    const responsaveis = despesa.responsaveis_divisao || [];
    if (responsaveis.length === 0 && despesa.perfil_id === filtroId) return valorTotal;
    if (responsaveis.length === 1 && responsaveis[0].id === filtroId) return valorTotal;
    
    const fatia = responsaveis.find((r: any) => r.id === filtroId);
    return fatia ? Number(fatia.valor || 0) : 0;
  };

  // 3. CALCULO AUVP
  const { totalReceita, chartData } = useMemo(() => {
    const recTotal = receitas
      .filter(r => r.perfil_id === usuarioSelecionado && getChaveMesAno(r.data) === mesAnoSelecionado)
      .reduce((acc, curr) => acc + Number(curr.valor), 0);
    
    const agrupado: Record<string, number> = {};
    despesas.forEach(d => {
      if (getChaveMesAno(d.data) === mesAnoSelecionado) {
        const valor = getValorRateado(d, usuarioSelecionado);
        if (valor > 0) {
          const cat = d.classificacao_auvp || d.auvp || 'Outros';
          if (!agrupado[cat]) agrupado[cat] = 0;
          agrupado[cat] += valor;
        }
      }
    });

    const processadas = categoriasConfig.map(cat => {
      const meta = recTotal * cat.percentual;
      const realizado = agrupado[cat.nome] || 0;

      return {
        ...cat,
        meta,
        realizado,
      };
    });

    return { totalReceita: recTotal, chartData: processadas };
  }, [receitas, despesas, usuarioSelecionado, mesAnoSelecionado]);

  // Componentes Custom do Recharts
  const CustomXAxisTick = ({ x, y, payload }: any) => {
    const words = payload.value.split(' ');
    return (
      <text x={x} y={y + 12} textAnchor="middle" fill="#334155" fontSize={11} fontWeight="bold">
        {words.map((word: string, index: number) => (
          <tspan x={x} dy={index === 0 ? 0 : 12} key={index}>{word}</tspan>
        ))}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      let meta = 0;
      let realizado = 0;
      let tipo = '';
      
      payload.forEach((p: any) => {
        if (p.dataKey === 'meta') {
          meta = p.value;
          tipo = p.payload.tipo;
        }
        if (p.dataKey === 'realizado') realizado = p.value;
      });

      let mensagem = '';
      let corTexto = '';
      
      if (tipo === 'Teto') {
        if (realizado <= meta) {
          mensagem = `Ainda pode gastar ${formatCurrency(meta - realizado)}`;
          corTexto = 'text-green-600 font-bold';
        } else {
          mensagem = `Extrapolou o teto em ${formatCurrency(realizado - meta)}`;
          corTexto = 'text-red-600 font-bold';
        }
      } else {
        if (realizado < meta) {
          mensagem = `Faltam ${formatCurrency(meta - realizado)} para atingir a meta`;
          corTexto = 'text-red-600 font-bold';
        } else {
          mensagem = `Meta de aporte atingida! (+ ${formatCurrency(realizado - meta)})`;
          corTexto = 'text-green-600 font-bold';
        }
      }

      return (
        <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg max-w-[250px]">
          <p className="font-bold text-gray-800 mb-2 border-b pb-2">{label} <span className="text-xs text-gray-400 font-normal ml-1">({tipo})</span></p>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Realizado:</span>
            <span className="font-semibold text-gray-900">{formatCurrency(realizado)}</span>
          </div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-500">Meta/Limite:</span>
            <span className="font-semibold text-gray-900">{formatCurrency(meta)}</span>
          </div>
          <p className={`text-xs mt-2 pt-2 border-t ${corTexto}`}>{mensagem}</p>
        </div>
      );
    }
    return null;
  };

  if (loadingInitial) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex justify-center items-center h-96">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6">
      {/* HEADER DO CARD E FILTROS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h2 className="text-xl font-bold font-manrope text-gray-900">Planejado vs Realizado</h2>
        </div>

        <div className="flex gap-2">
          <select 
            value={usuarioSelecionado} 
            onChange={(e) => setUsuarioSelecionado(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none"
          >
            {membrosAtivos.map(m => (
              <option key={m.id} value={m.id}>{m.nome}</option>
            ))}
          </select>
          <select 
            value={mesAnoSelecionado} 
            onChange={(e) => setMesAnoSelecionado(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none"
          >
            {mesesDisponiveis.map(m => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (RECHARTS) */}
      {loadingData ? (
        <div className="flex justify-center items-center h-80">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : totalReceita === 0 ? (
        <div className="flex flex-col items-center justify-center text-center h-80 bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-6">
          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="text-gray-500 font-medium">Cadastre suas receitas deste mês para calcular as metas AUVP.</p>
        </div>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              margin={{ top: 20, right: 10, left: -20, bottom: 20 }}
              style={{ backgroundColor: "#f8fafc", borderRadius: "0.5rem" }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#cbd5e1" />
              
              <XAxis 
                dataKey="nome" 
                xAxisId={0} 
                tick={<CustomXAxisTick />} 
                axisLine={false} 
                tickLine={false} 
              />
              <XAxis dataKey="nome" xAxisId={1} hide={true} />
              
              <YAxis 
                domain={[0, 'auto']}
                width={65}
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxis}
                tick={{ fontSize: 14, fill: '#334155', fontWeight: 700 }}
              />
              
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
              
              {/* Barra Larga (Fundo / Meta) */}
              <Bar dataKey="meta" xAxisId={0} barSize={50} radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-meta-${index}`} fill={entry.corFraca} />
                ))}
              </Bar>
              
              {/* Barra Fina (Realizado / Frente) */}
              <Bar dataKey="realizado" xAxisId={1} barSize={20} radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-real-${index}`} fill={entry.corForte} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
