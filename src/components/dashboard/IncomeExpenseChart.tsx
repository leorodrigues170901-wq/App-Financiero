'use client';

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function IncomeExpenseChart() {
  const [loading, setLoading] = useState(true);
  const [membrosAtivos, setMembrosAtivos] = useState<any[]>([]);
  const [filtroUsuario, setFiltroUsuario] = useState<string>('Todos');

  const [receitasBrutas, setReceitasBrutas] = useState<any[]>([]);
  const [despesasBrutas, setDespesasBrutas] = useState<any[]>([]);

  const [anoSelecionado, setAnoSelecionado] = useState<string>('');
  const [mesInicioIndex, setMesInicioIndex] = useState<number>(0);
  const [mesFimIndex, setMesFimIndex] = useState<number>(11);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

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

      let queryReceitas = supabase.from('receitas').select('*');
      let queryDespesas = supabase.from('despesas').select('*');

      if (familiaId) {
        queryReceitas = queryReceitas.eq('familia_id', familiaId);
        queryDespesas = queryDespesas.eq('familia_id', familiaId);
      } else {
        queryReceitas = queryReceitas.eq('perfil_id', user.id);
        queryDespesas = queryDespesas.eq('perfil_id', user.id);
      }

      const [resReceitas, resDespesas] = await Promise.all([queryReceitas, queryDespesas]);
      setReceitasBrutas(resReceitas.data || []);
      setDespesasBrutas(resDespesas.data || []);
      
      setLoading(false);
    }
    fetchData();
  }, []);

  const getValorRateado = (despesa: any, filtroId: string) => {
    const valorTotal = Number(despesa.valor || 0);
    if (filtroId === 'Todos') return valorTotal;
    
    const responsaveis = despesa.responsaveis_divisao || [];
    if (responsaveis.length === 0 && despesa.perfil_id === filtroId) return valorTotal;
    if (responsaveis.length === 1 && responsaveis[0].id === filtroId) return valorTotal;
    
    const fatia = responsaveis.find((r: any) => r.id === filtroId);
    return fatia ? Number(fatia.valor || 0) : 0;
  };

  const mesesNomes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const getMesAnoKey = (dataString: string) => {
    if (!dataString) return null;
    const partes = dataString.split('T')[0].split('-'); 
    if (partes.length < 3) return null;
    return `${partes[0]}-${partes[1]}`; // YYYY-MM
  };

  // Agregador de Dados por Mês (Independente de Gaps)
  const agregadosPorMes = useMemo(() => {
    const mapa: Record<string, { receita: number, despesa: number }> = {};
    
    receitasBrutas.forEach(r => {
      if (filtroUsuario === 'Todos' || r.perfil_id === filtroUsuario) {
        const key = getMesAnoKey(r.data); // YYYY-MM
        if (key) {
          if (!mapa[key]) mapa[key] = { receita: 0, despesa: 0 };
          mapa[key].receita += Number(r.valor || 0);
        }
      }
    });

    despesasBrutas.forEach(d => {
      const valor = getValorRateado(d, filtroUsuario);
      if (valor > 0) {
        const key = getMesAnoKey(d.data);
        if (key) {
          if (!mapa[key]) mapa[key] = { receita: 0, despesa: 0 };
          mapa[key].despesa += valor;
        }
      }
    });

    return mapa;
  }, [receitasBrutas, despesasBrutas, filtroUsuario]);

  // Lista de anos para o Slicer baseada nos dados reais + ano atual
  const anosDisponiveis = useMemo(() => {
    const anos = new Set<string>();
    receitasBrutas.forEach(r => { const k = getMesAnoKey(r.data); if (k) anos.add(k.substring(0, 4)); });
    despesasBrutas.forEach(d => { const k = getMesAnoKey(d.data); if (k) anos.add(k.substring(0, 4)); });
    anos.add(new Date().getFullYear().toString());
    return Array.from(anos).sort();
  }, [receitasBrutas, despesasBrutas]);

  useEffect(() => {
    if (anosDisponiveis.length > 0 && !anosDisponiveis.includes(anoSelecionado)) {
      setAnoSelecionado(anosDisponiveis[anosDisponiveis.length - 1]);
    }
  }, [anosDisponiveis, anoSelecionado]);

  // Motor de Gaps Forçado: Gera o array ESTRITAMENTE baseado no Slicer
  const chartDataVisivel = useMemo(() => {
    if (!anoSelecionado) return [];
    const dados = [];
    
    for (let mesIdx = mesInicioIndex; mesIdx <= mesFimIndex; mesIdx++) {
      const mesString = String(mesIdx + 1).padStart(2, '0');
      const key = `${anoSelecionado}-${mesString}`;
      const stats = agregadosPorMes[key] || { receita: 0, despesa: 0 }; // Injeta ZEROS absolutos
      
      dados.push({
        key,
        ano: anoSelecionado,
        mes: mesIdx + 1,
        receita: stats.receita,
        despesa: stats.despesa,
        label: `${mesesNomes[mesIdx]}/${anoSelecionado.slice(2)}`
      });
    }
    return dados;
  }, [anoSelecionado, mesInicioIndex, mesFimIndex, agregadosPorMes]);

  const valoresMaximos = useMemo(() => {
    let maxR = 0;
    let maxD = 0;
    chartDataVisivel.forEach(d => {
      if (d.receita > maxR) maxR = d.receita;
      if (d.despesa > maxD) maxD = d.despesa;
    });
    return { receita: maxR, despesa: maxD };
  }, [chartDataVisivel]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const formatYAxis = (tickItem: number) => {
    if (tickItem >= 1000) return `R$ ${(tickItem / 1000).toFixed(1).replace('.0', '')}k`;
    return `R$ ${tickItem}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      let receita = 0;
      let despesa = 0;
      payload.forEach((p: any) => {
        if (p.dataKey === 'receita') receita = p.value;
        if (p.dataKey === 'despesa') despesa = p.value;
      });

      return (
        <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg">
          <p className="font-bold text-gray-800 mb-2">{label}</p>
          <p className="text-emerald-600 font-semibold text-sm">Receitas: {formatCurrency(receita)}</p>
          <p className="text-red-500 font-semibold text-sm">Despesas: {formatCurrency(despesa)}</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-white rounded-3xl border border-gray-100 shadow-sm mb-8">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6 mb-8">
      {/* 1. Header com Filtros Isolados */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-lg font-bold font-manrope text-gray-900">Renda vs Despesas</h2>
        
        <div className="flex flex-wrap bg-gray-50 rounded-full p-1 border border-gray-200 gap-1">
          <button 
            onClick={() => setFiltroUsuario('Todos')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${filtroUsuario === 'Todos' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            Todos
          </button>
          {membrosAtivos.map(m => (
            <button 
              key={m.id}
              onClick={() => setFiltroUsuario(m.id)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${filtroUsuario === m.id ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              {m.nome}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Timeline Slicer e Max Values */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Período de Análise</span>
          <div className="flex items-center gap-3">
            <select 
              value={anoSelecionado} 
              onChange={(e) => setAnoSelecionado(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            >
              {anosDisponiveis.map(ano => (
                <option key={ano} value={ano}>{ano}</option>
              ))}
            </select>
            
            <span className="text-gray-400">|</span>
            
            <select 
              value={mesInicioIndex} 
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setMesInicioIndex(val);
                if (val > mesFimIndex) setMesFimIndex(val);
              }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            >
              {mesesNomes.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>
            
            <span className="text-gray-500 text-sm font-medium">até</span>
            
            <select 
              value={mesFimIndex} 
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setMesFimIndex(val);
                if (val < mesInicioIndex) setMesInicioIndex(val);
              }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
            >
              {mesesNomes.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 4. Cálculo dos Valores Máximos */}
        <div className="flex gap-6 text-right mt-4 md:mt-0">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Renda Máx.</p>
            <p className="text-lg font-black text-emerald-600">{formatCurrency(valoresMaximos.receita)}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Despesa Máx.</p>
            <p className="text-lg font-black text-red-500">{formatCurrency(valoresMaximos.despesa)}</p>
          </div>
        </div>
      </div>

      {/* 5. Visual do Gráfico */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart 
            data={chartDataVisivel} 
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            style={{ backgroundColor: "#f8fafc", borderRadius: "0.5rem" }}
          >
            <defs>
              <linearGradient id="colorDespesa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={true} 
              vertical={true} 
              stroke="#cbd5e1" 
            />
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 14, fill: '#334155', fontWeight: 700 }}
              padding={{ left: 20, right: 20 }}
              dy={10}
            />
            <YAxis 
              domain={[0, 'auto']}
              width={65}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxis}
              tick={{ fontSize: 14, fill: '#334155', fontWeight: 700 }}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Despesas: Area com degrade laranja/vermelho */}
            <Area 
              type="monotone" 
              dataKey="despesa" 
              stroke="#ef4444" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorDespesa)" 
            />
            
            {/* Renda: Line tracejada verde */}
            <Line 
              type="monotone" 
              dataKey="receita" 
              stroke="#10b981" 
              strokeWidth={3}
              strokeDasharray="5 5" 
              dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
