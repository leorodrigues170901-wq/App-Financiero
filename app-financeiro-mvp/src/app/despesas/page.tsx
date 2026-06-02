'use client';
import { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import TransactionModal from '@/components/TransactionModal';
import { Pencil, Trash2, Plus, Search, ChevronLeft, ChevronRight, Copy, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { limparDinheiroParaBanco } from '@/lib/formatters';
import { useMonth } from '@/contexts/MonthContext';

const CORES_AUVP: Record<string, string> = {
  'Essencial': 'bg-blue-100 text-blue-700 border-blue-200',
  'Investimento': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Prazer': 'bg-pink-100 text-pink-700 border-pink-200',
  'Meta Planejada': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  'Oportunidade': 'bg-amber-100 text-amber-700 border-amber-200',
  'Conforto': 'bg-purple-100 text-purple-700 border-purple-200',
  'Aumentar Renda': 'bg-teal-100 text-teal-700 border-teal-200'
};

const getAvatarColor = (colorName: string) => {
  const map: any = {
    blue: 'bg-blue-500', pink: 'bg-pink-500', emerald: 'bg-emerald-500', 
    purple: 'bg-purple-500', red: 'bg-red-500', amber: 'bg-amber-500',
    indigo: 'bg-indigo-500', teal: 'bg-teal-500', cyan: 'bg-cyan-500',
    orange: 'bg-orange-500'
  };
  return map[colorName] || 'bg-gray-500';
};

const getTextColor = (colorName: string) => {
  const map: any = {
    blue: 'text-blue-500', pink: 'text-pink-500', emerald: 'text-emerald-500', 
    purple: 'text-purple-500', red: 'text-red-500', amber: 'text-amber-500',
    indigo: 'text-indigo-500', teal: 'text-teal-500', cyan: 'text-cyan-500',
    orange: 'text-orange-500'
  };
  return map[colorName] || 'text-gray-500';
};

const getAvatarStyle = (cor: string) => {
  if (!cor) return { className: 'bg-gray-500' };
  if (cor.startsWith('#')) return { style: { backgroundColor: cor } };
  return { className: getAvatarColor(cor) };
};

const getTextStyle = (cor: string) => {
  if (!cor) return { className: 'text-gray-500' };
  if (cor.startsWith('#')) return { style: { color: cor } };
  return { className: getTextColor(cor) };
};

export default function DespesasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDespesa, setEditingDespesa] = useState<any>(null);
  
  // Controle de Mês/Ano via Contexto
  const { currentDate, setCurrentDate } = useMonth();
  const [filtroUsuarios, setFiltroUsuarios] = useState<string[]>([]);

  const [despesas, setDespesas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<{perfilId: string, familiaId: string | null} | null>(null);
  const [membrosAtivos, setMembrosAtivos] = useState<any[]>([]);
  const [isImporting, setIsImporting] = useState(false);

  const fetchDespesas = async () => {
    setLoading(true);
    
    // Formata primeiro e último dia do mês ativo localmente usando toISOString
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59).toISOString();

    const { data, error } = await supabase
      .from('despesas')
      .select('*')
      .gte('data', startOfMonth)
      .lte('data', endOfMonth)
      .order('data', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar despesas:', error);
      setLoading(false);
      return;
    }

    if (data) {
      const mapped = data.map((item: any) => ({
        id: item.id,
        descricao: item.descricao,
        responsaveis_divisao: item.responsaveis_divisao || [],
        classificacao_auvp: item.classificacao_auvp || item.auvp || 'Essencial',
        valor: Number(item.valor),
        status: item.status || 'Pendente',
        parcelado: item.parcelado || item.is_parcelado || false,
        parcela_atual: item.parcela_atual || 1,
        total_parcelas: item.total_parcelas || 1,
        data: item.data
      }));
      setDespesas(mapped);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      
      const { data: membro } = await supabase
        .from('membros_familia')
        .select('familia_id')
        .eq('perfil_id', user.id)
        .maybeSingle();
        
      setUserData({
        perfilId: user.id,
        familiaId: membro?.familia_id || null
      });

      if (membro?.familia_id) {
        const { data: familiaMembros } = await supabase
          .from('membros_familia')
          .select('perfil_id')
          .eq('familia_id', membro.familia_id);
          
        if (familiaMembros && familiaMembros.length > 0) {
          const ids = familiaMembros.map(m => m.perfil_id);
          const { data: perfis } = await supabase
            .from('perfis')
            .select('id, nome_usuario, cor_perfil')
            .in('id', ids);
          if (perfis) setMembrosAtivos(perfis);
        }
      } else {
         const { data: perfis } = await supabase
            .from('perfis')
            .select('id, nome_usuario, cor_perfil')
            .eq('id', user.id);
         if (perfis) setMembrosAtivos(perfis);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchDespesas();
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const formattedMonth = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const displayMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);



  // Lógica de Filtragem
  const filteredDespesas = despesas.filter(d => {
    if (filtroUsuarios.length === 0) return true;
    
    const idsDaDespesa = d.responsaveis_divisao?.map((r: any) => r.id) || [];
    
    if (idsDaDespesa.length !== filtroUsuarios.length) return false;
    
    const todosInclusos = filtroUsuarios.every(id => idsDaDespesa.includes(id));
    return todosInclusos;
  });

  // Cálculos Dinâmicos
  const totalPrevisto = filteredDespesas.reduce((acc, curr) => acc + curr.valor, 0);
  const jaPago = filteredDespesas.filter(d => d.status === 'Pago').reduce((acc, curr) => acc + curr.valor, 0);
  const faltaPagar = filteredDespesas.filter(d => d.status !== 'Pago').reduce((acc, curr) => acc + curr.valor, 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pago': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pendente': return 'bg-red-50 text-red-700 border-red-200';
      case 'Direcionado': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Realizado': return 'bg-emerald-500';
      case 'Pago': return 'bg-emerald-500';
      case 'Pendente': return 'bg-red-500';
      case 'Direcionado': return 'bg-amber-500';
      default: return 'bg-gray-400';
    }
  };

  const handleOpenCreate = () => {
    setEditingDespesa(null);
    setIsModalOpen(true);
  };

  const handleEdit = (despesa: any) => {
    setEditingDespesa(despesa);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: any) => {
    const { error } = await supabase
      .from('despesas')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erro ao deletar despesa:', error);
      return;
    }

    setDespesas(despesas.filter(d => d.id !== id));
  };

  const handleSaveModal = async (data: any) => {
    if (!userData) {
      console.error('Usuário não carregado');
      return;
    }

    const safeValor = limparDinheiroParaBanco(data.valor);
    
    const dbData: any = {
      descricao: data.descricao,
      valor: safeValor,
      status: data.status,
      categoria: data.categoria_gastos || 'Variável',
      categoria_gastos: data.categoria_gastos,
      auvp: data.classificacao_auvp,
      classificacao_auvp: data.classificacao_auvp,
      tipo_divisao: data.tipo_divisao,
      forma_pagamento: data.forma_pagamento,
      responsaveis_divisao: data.responsaveis_divisao,
      is_parcelado: data.parcelado,
      parcelado: data.parcelado,
      parcela_atual: data.parcela_atual,
      total_parcelas: data.total_parcelas,
      perfil_id: data.resp === 'Todos' ? userData.perfilId : data.resp,
      familia_id: userData.familiaId
    };

    if (editingDespesa) {
      // Modo de Edição: Atualiza o item existente (mantém a data original)
      const { error } = await supabase
        .from('despesas')
        .update(dbData)
        .eq('id', editingDespesa.id);
        
      if (error) {
        console.error('Erro ao atualizar despesa:', error);
        return;
      }
      
      fetchDespesas();
    } else {
      // Criação: Insere o novo registro herdando o mês/ano selecionado na UI (dia 1º)
      dbData.data = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
      
      const { error } = await supabase
        .from('despesas')
        .insert([dbData]);
        
      if (error) {
        console.error('Erro ao inserir despesa:', error);
        return;
      }
      
      fetchDespesas();
    }
  };

  const handleImportarMesAnterior = async () => {
    try {
      setIsImporting(true);
      
      const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const startOfPrevMonth = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 1).toISOString();
      const endOfPrevMonth = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth() + 1, 0, 23, 59, 59).toISOString();

      const { data: despesasAnteriores, error } = await supabase
        .from('despesas')
        .select('*')
        .gte('data', startOfPrevMonth)
        .lte('data', endOfPrevMonth)
        .in('categoria_gastos', ['Custo Fixo Assumido', 'Custo Recorrente Cancelável', 'Custo Recorrente Planejado']);

      if (error) {
        console.error('Erro ao buscar despesas do mês anterior:', error);
        alert('Erro ao buscar despesas do mês anterior.');
        return;
      }

      const despesasFiltradas = despesasAnteriores?.filter(d => {
        const isParcelado = d.parcelado || d.is_parcelado;
        if (isParcelado && d.parcela_atual >= d.total_parcelas) {
          return false;
        }
        return true;
      }) || [];

      if (despesasFiltradas.length === 0) {
        alert("Não há despesas fixas ou parcelas ativas no mês anterior para importar.");
        return;
      }

      const novasDespesas = despesasFiltradas.map(d => {
        const { id, created_at, updated_at, ...rest } = d;
        const isParcelado = rest.parcelado || rest.is_parcelado;
        
        return {
          ...rest,
          data: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString(),
          status: 'Pendente',
          parcela_atual: isParcelado ? (rest.parcela_atual || 1) + 1 : rest.parcela_atual
        };
      });

      const { error: insertError } = await supabase.from('despesas').insert(novasDespesas);

      if (insertError) {
        console.error('Erro ao importar despesas:', insertError);
        alert('Erro ao importar despesas.');
        return;
      }

      alert('Despesas importadas com sucesso!');
      fetchDespesas();

    } catch (err) {
      console.error('Erro inesperado na importação:', err);
      alert('Ocorreu um erro inesperado ao importar.');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <AppLayout>
      <div className="relative font-sans text-[#0f0f0f] pb-24">
        
        {/* Cabeçalho de Controle */}
        <div className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200 pt-5 pb-4 mb-8 shadow-sm">
          <div className="mx-auto max-w-[1400px] px-6">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold font-manrope tracking-tight hidden sm:block">Despesas</h1>
                <div className="h-6 w-px bg-gray-300 hidden sm:block mx-2"></div>
                
                <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm transition-all hover:shadow-md">
                  <button onClick={handlePrevMonth} className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-gray-800 px-3 min-w-[130px] text-center capitalize select-none tracking-wide">
                    {displayMonth}
                  </span>
                  <button onClick={handleNextMonth} className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative hidden md:block flex-1 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Buscar despesa..." 
                    className="w-full bg-white border border-gray-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                  />
                </div>
                <button 
                  onClick={handleImportarMesAnterior}
                  disabled={isImporting}
                  className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-zinc-800 hover:bg-zinc-700 disabled:opacity-70 disabled:hover:scale-100 rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  {isImporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Copy className="w-4 h-4" />}
                  {isImporting ? 'Importando...' : 'Importar do Mês Anterior'}
                </button>
                <button 
                  onClick={handleOpenCreate}
                  className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-black rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Nova Despesa
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar pb-1">
              <button
                onClick={() => setFiltroUsuarios([])}
                className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${
                  filtroUsuarios.length === 0 
                    ? 'bg-zinc-800 text-white shadow-md' 
                    : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Todos
              </button>
              {membrosAtivos.map(membro => {
                const isActive = filtroUsuarios.includes(membro.id);
                const activeColor = getAvatarColor(membro.cor_perfil) + ' text-white border-transparent shadow-md';
                const inactiveColor = 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black';
                return (
                  <button
                    key={membro.id}
                    onClick={() => {
                      if (isActive) {
                        setFiltroUsuarios(prev => prev.filter(id => id !== membro.id));
                      } else {
                        setFiltroUsuarios(prev => [...prev, membro.id]);
                      }
                    }}
                    className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${isActive ? activeColor : inactiveColor}`}
                    style={membro.cor_perfil?.startsWith('#') && isActive ? { backgroundColor: membro.cor_perfil, color: '#fff', borderColor: 'transparent' } : {}}
                  >
                    {membro.nome_usuario}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        <main className="mx-auto max-w-[1400px] px-6 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Total Previsto
                {filtroUsuarios.length > 0 && <span className="opacity-60 lowercase font-medium bg-gray-100 px-2 py-0.5 rounded-full text-[10px]">(filtrado)</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-gray-900">{formatCurrency(totalPrevisto)}</p>
            </div>
            
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Já Pago
                {filtroUsuarios.length > 0 && <span className="opacity-60 lowercase font-medium bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">(filtrado)</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-emerald-700">{formatCurrency(jaPago)}</p>
            </div>
            
            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Falta Pagar
                {filtroUsuarios.length > 0 && <span className="opacity-60 lowercase font-medium bg-red-100 px-2 py-0.5 rounded-full text-[10px]">(filtrado)</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-red-700">{formatCurrency(faltaPagar)}</p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up">
            
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-semibold font-manrope text-gray-800">
                 {filteredDespesas.length} {filteredDespesas.length === 1 ? 'Lançamento encontrado' : 'Lançamentos encontrados'}
               </h2>
            </div>

            <div className="w-full overflow-x-auto no-scrollbar bg-white border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-3 px-4 text-left">Descrição</th>
                    <th className="py-3 px-4 text-center">Parcela</th>
                    <th className="py-3 px-4 text-center">Responsável</th>
                    <th className="py-3 px-4 text-center">Classificação AUVP</th>
                    <th className="py-3 px-4 text-center">Valor (R$)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center w-24">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-base divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center">
                        <div className="flex justify-center items-center">
                          <div className="w-6 h-6 border-2 border-gray-200 border-t-black rounded-full animate-spin"></div>
                        </div>
                      </td>
                    </tr>
                  ) : filteredDespesas.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-16 px-6 text-center">
                        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 font-manrope mb-2">Nenhum lançamento encontrado</h3>
                          <p className="text-sm text-gray-500">
                            Não há registros de despesas para este mês. Adicione seu primeiro lançamento!
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredDespesas.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group align-middle">
                        <td className="py-4 px-4 text-left">
                          <p className="font-semibold text-gray-800 truncate max-w-[250px]">{item.descricao}</p>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {item.parcelado ? (
                            <span className="font-semibold text-gray-800">{item.parcela_atual}/{item.total_parcelas}</span>
                          ) : (
                            <span className="text-gray-500 text-sm font-medium">Único</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center -space-x-1.5">
                            {item.responsaveis_divisao?.map((resp: any, index: number) => {
                              const membro = membrosAtivos.find(m => m.id === resp.id);
                              const cor = membro?.cor_perfil || 'blue';
                              const initial = membro?.nome_usuario ? membro.nome_usuario.charAt(0).toUpperCase() : 'U';
                              const avatarProps = getAvatarStyle(cor);
                              
                              return (
                                <div 
                                  key={resp.id || index} 
                                  className={`w-7 h-7 rounded-full text-white flex items-center justify-center text-[11px] font-bold border-2 border-white shadow-sm z-[${10 - index}] ${avatarProps.className || ''}`}
                                  style={avatarProps.style}
                                  title={membro?.nome_usuario}
                                >
                                  {initial}
                                </div>
                              );
                            })}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border uppercase tracking-wide ${CORES_AUVP[item.classificacao_auvp] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                            {item.classificacao_auvp}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="font-bold text-gray-900 text-[15px]">
                            {formatCurrency(item.valor)}
                          </div>
                          
                          {item.responsaveis_divisao?.length > 1 && (
                            <div className="flex justify-center gap-1.5 mt-1.5 flex-wrap max-w-[150px] mx-auto">
                              {item.responsaveis_divisao.map((resp: any) => {
                                const membro = membrosAtivos.find(m => m.id === resp.id);
                                const cor = membro?.cor_perfil || 'gray';
                                const textProps = getTextStyle(cor);
                                
                                return (
                                  <span key={resp.id} className={`text-[10.5px] font-bold tracking-tight ${textProps.className || ''}`} style={textProps.style}>
                                    {membro?.nome_usuario?.split(' ')[0]}: {formatCurrency(resp.valor)}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getStatusColor(item.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`}></span>
                            {item.status}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                            <button 
                              onClick={() => handleEdit(item)}
                              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Editar"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(item.id)}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Excluir"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <TransactionModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingDespesa}
          onSave={handleSaveModal}
        />

        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
    </AppLayout>
  );
}
