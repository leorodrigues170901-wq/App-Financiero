'use client';
import { useState, useEffect, useCallback } from 'react';
import AppLayout from '@/components/AppLayout';
import TransactionModal from '@/components/TransactionModal';
import { Pencil, Trash2, Plus, Search, ChevronLeft, ChevronRight, Import, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { limparDinheiroParaBanco } from '@/lib/formatters';
import { useMonth } from '@/contexts/MonthContext';

export default function ReceitasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReceita, setEditingReceita] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  
  // Controle de Mês/Ano
  const { currentDate, setCurrentDate } = useMonth();
  
  const [receitas, setReceitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<{perfilId: string, familiaId: string | null} | null>(null);
  
  const [membrosAtivos, setMembrosAtivos] = useState<{id: string, nome: string, cor: string}[]>([]);
  const [filtroUsuariosSelecionados, setFiltroUsuariosSelecionados] = useState<string[]>(['Todos']);
  const [isImporting, setIsImporting] = useState(false);
  const [ordenacao, setOrdenacao] = useState("padrao");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && itemToDelete) {
        confirmDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [itemToDelete]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      
      const { data: userFam } = await supabase
        .from('membros_familia')
        .select('familia_id')
        .eq('perfil_id', user.id)
        .maybeSingle(); // maybeSingle para prevenir erro se não achar
        
      setUserData({
        perfilId: user.id,
        familiaId: userFam?.familia_id || null
      });

      // Buscar Membros Ativos
      let membersData: any[] = [];
      if (userFam?.familia_id) {
        const { data: membrosFam } = await supabase
          .from('membros_familia')
          .select('perfil_id')
          .eq('familia_id', userFam.familia_id)
          .in('status', ['host', 'ativo']);
          
        if (membrosFam && membrosFam.length > 0) {
          const ids = membrosFam.map(m => m.perfil_id);
          const { data: perfis } = await supabase
            .from('perfis')
            .select('id, nome_usuario, cor_perfil')
            .in('id', ids);
            
          membersData = perfis?.map((p: any) => ({
            id: p.id,
            nome: p.nome_usuario || 'Usuário',
            cor: p.cor_perfil || 'slate'
          })) || [];
        }
      } else {
        const { data: perfis } = await supabase
          .from('perfis')
          .select('id, nome_usuario, cor_perfil')
          .eq('id', user.id);
          
        membersData = perfis?.map((p: any) => ({
          id: p.id,
          nome: p.nome_usuario || 'Você',
          cor: p.cor_perfil || 'slate'
        })) || [];
      }
      setMembrosAtivos(membersData);
    };
    fetchUserData();
  }, []);

  const fetchReceitas = useCallback(async () => {
    if (!userData) return;
    setLoading(true);
    
    const anoStr = currentDate.getFullYear();
    const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
    const ultimoDiaAtual = new Date(anoStr, currentDate.getMonth() + 1, 0).getDate();
    const startOfCurrentMonth = `${anoStr}-${mesAtualStr}-01`;
    const endOfCurrentMonth = `${anoStr}-${mesAtualStr}-${String(ultimoDiaAtual).padStart(2, '0')}`;

    let query = supabase
      .from('receitas')
      .select('*')
      .gte('data', startOfCurrentMonth)
      .lte('data', endOfCurrentMonth)
      .order('data', { ascending: false });
    
    // Filtro por Família/Perfil
    if (userData.familiaId) {
      query = query.eq('familia_id', userData.familiaId);
    } else {
      query = query.eq('perfil_id', userData.perfilId);
    }

    // Filtro de Responsável via Supabase
    if (!filtroUsuariosSelecionados.includes('Todos')) {
      if (filtroUsuariosSelecionados.length > 0) {
        query = query.in('perfil_id', filtroUsuariosSelecionados);
      }
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Erro ao buscar receitas:', error);
      setLoading(false);
      return;
    }

    if (data) {
      const mapped = data.map((item: any) => ({
        id: item.id,
        descricao: item.descricao,
        valor: Number(item.valor),
        perfil_id: item.perfil_id,
        status: item.status,
        data: item.data,
        created_at: item.created_at
      }));
      setReceitas(mapped);
    }
    setLoading(false);
  }, [currentDate, userData, filtroUsuariosSelecionados]);

  useEffect(() => {
    fetchReceitas();
  }, [fetchReceitas]);

  const toggleFiltroResponsavel = (id: string) => {
    if (id === 'Todos') {
      setFiltroUsuariosSelecionados(['Todos']);
    } else {
      let novaSelecao = filtroUsuariosSelecionados.filter(item => item !== 'Todos');
      if (novaSelecao.includes(id)) {
        novaSelecao = novaSelecao.filter(item => item !== id);
        if (novaSelecao.length === 0) {
          novaSelecao = ['Todos'];
        }
      } else {
        novaSelecao.push(id);
      }
      setFiltroUsuariosSelecionados(novaSelecao);
    }
  };

  const handleImportPreviousMonth = async () => {
    if (!userData) return;
    setIsImporting(true);
    
    try {
      const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const prevAnoStr = prevMonthDate.getFullYear();
      const prevMesStr = String(prevMonthDate.getMonth() + 1).padStart(2, '0');
      const prevUltimoDia = new Date(prevAnoStr, prevMonthDate.getMonth() + 1, 0).getDate();
      
      const startOfPrevMonth = `${prevAnoStr}-${prevMesStr}-01`;
      const endOfPrevMonth = `${prevAnoStr}-${prevMesStr}-${String(prevUltimoDia).padStart(2, '0')}`;

      let query = supabase
        .from('receitas')
        .select('*')
        .gte('data', startOfPrevMonth)
        .lte('data', endOfPrevMonth);

      if (userData.familiaId) {
        query = query.eq('familia_id', userData.familiaId);
      } else {
        query = query.eq('perfil_id', userData.perfilId);
      }

      const { data: receitasAnteriores, error: fetchError } = await query;

      if (fetchError) {
        console.error('Erro ao buscar receitas do mês anterior:', fetchError);
        setIsImporting(false);
        return;
      }

      if (!receitasAnteriores || receitasAnteriores.length === 0) {
        setIsImporting(false);
        return;
      }

      const anoStr = currentDate.getFullYear();
      const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dataMesAtual = `${anoStr}-${mesAtualStr}-01`;

      const novasReceitas = receitasAnteriores.map(receita => {
        const { id, created_at, updated_at, ...rest } = receita;
        return {
          ...rest,
          data: dataMesAtual, // data do mês selecionado na UI
          status: 'Pendente' // Regra de negócio: Toda importação nasce como pendente
        };
      });

      const { error: insertError } = await supabase.from('receitas').insert(novasReceitas);

      if (insertError) {
        console.error("Erro ao importar receitas:", insertError?.message || insertError);
      } else {
        fetchReceitas();
      }
    } catch (error: any) {
      console.error("Erro ao importar receitas:", error?.message || error);
    } finally {
      setIsImporting(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const formattedMonth = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const displayMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

  // Cálculos Dinâmicos baseados nas receitas já filtradas no back-end
  const totalPrevisto = receitas.reduce((acc, curr) => acc + curr.valor, 0);
  const jaRecebido = receitas.filter(r => r.status === 'Recebido').reduce((acc, curr) => acc + curr.valor, 0);
  const aReceber = receitas.filter(r => r.status === 'Pendente').reduce((acc, curr) => acc + curr.valor, 0);
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recebido':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Pendente':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Recebido':
        return 'bg-blue-500';
      case 'Pendente':
        return 'bg-amber-500';
      default:
        return 'bg-gray-400';
    }
  };

  const updateStatusInline = async (id: string, novoStatus: string) => {
    setReceitas(prev => prev.map(r => r.id === id ? { ...r, status: novoStatus } : r));
    const { error } = await supabase
      .from("receitas")
      .update({ status: novoStatus })
      .eq("id", id);
      
    if (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  const bgColors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    pink: "bg-pink-100 text-pink-700",
    emerald: "bg-emerald-100 text-emerald-700",
    purple: "bg-purple-100 text-purple-700",
    amber: "bg-amber-100 text-amber-700",
    teal: "bg-teal-100 text-teal-700",
    cyan: "bg-cyan-100 text-cyan-700",
    indigo: "bg-indigo-100 text-indigo-700",
    rose: "bg-rose-100 text-rose-700",
    orange: "bg-orange-100 text-orange-700",
    slate: "bg-slate-100 text-slate-700",
  };

  const bgHoverColors: Record<string, string> = {
    blue: "hover:bg-blue-100 hover:text-blue-700",
    pink: "hover:bg-pink-100 hover:text-pink-700",
    emerald: "hover:bg-emerald-100 hover:text-emerald-700",
    purple: "hover:bg-purple-100 hover:text-purple-700",
    amber: "hover:bg-amber-100 hover:text-amber-700",
    teal: "hover:bg-teal-100 hover:text-teal-700",
    cyan: "hover:bg-cyan-100 hover:text-cyan-700",
    indigo: "hover:bg-indigo-100 hover:text-indigo-700",
    rose: "hover:bg-rose-100 hover:text-rose-700",
    orange: "hover:bg-orange-100 hover:text-orange-700",
    slate: "hover:bg-slate-100 hover:text-slate-700",
  };

  const ringColors: Record<string, string> = {
    blue: "ring-blue-500",
    pink: "ring-pink-500",
    emerald: "ring-emerald-500",
    purple: "ring-purple-500",
    amber: "ring-amber-500",
    teal: "ring-teal-500",
    cyan: "ring-cyan-500",
    indigo: "ring-indigo-500",
    rose: "ring-rose-500",
    orange: "ring-orange-500",
    slate: "ring-slate-500",
  };

  const getRespBadge = (perfil_id: string) => {
    const membro = membrosAtivos.find(m => m.id === perfil_id);
    const nomeExibicao = membro ? membro.nome : 'Desconhecido';
    const corBadge = membro ? membro.cor : 'slate';
    
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${bgColors[corBadge] || bgColors.slate}`}>
        <span>{nomeExibicao}</span>
      </div>
    );
  };

  const handleOpenCreate = () => {
    setEditingReceita(null);
    setIsModalOpen(true);
  };

  const handleEdit = (receita: any) => {
    setEditingReceita(receita);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    const { error } = await supabase
      .from('receitas')
      .delete()
      .eq('id', itemToDelete);

    if (error) {
      console.error('Erro ao deletar receita:', error);
      return;
    }

    setReceitas(receitas.filter(r => r.id !== itemToDelete));
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const handleSaveModal = async (data: any) => {
    if (!userData) {
      console.error('Usuário não carregado');
      return;
    }

    // Limpeza Segura do valor monetário
    const safeValor = Number(String(data.valor).replace(/\./g, "").replace(",", "."));
    
    const dbData: any = {
      descricao: data.descricao,
      valor: safeValor,
      status: data.status,
      // Categoria agora é opcional e não é enviada para receita pelo modal
      perfil_id: data.resp === 'Casal' ? userData.perfilId : data.resp,
      familia_id: userData.familiaId
    };

    if (editingReceita) {
      // Remove o id do payload por segurança
      const { id, ...payload } = dbData;
      
      const { error } = await supabase
        .from('receitas')
        .update(payload)
        .eq('id', editingReceita.id);
        
      if (error) {
        console.error('Erro ao atualizar receita:', error?.message || error);
        return;
      }
      fetchReceitas();
    } else {
      const anoStr = currentDate.getFullYear();
      const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dataMesAtual = `${anoStr}-${mesAtualStr}-01`;
      dbData.data = dataMesAtual;
      
      const { error } = await supabase
        .from('receitas')
        .insert([dbData]);
        
      if (error) {
        console.error('Erro ao inserir receita:', error?.message || error);
        return;
      }
      fetchReceitas();
    }
  };

  return (
    <AppLayout>
      <div className="relative font-sans text-[#0f0f0f] pb-24">
        
        {/* Cabeçalho de Controle */}
        <div className="bg-white dark:bg-zinc-950 sticky top-0 z-40 border-b border-gray-200 pt-5 pb-4 mb-8 shadow-sm">
          <div className="mx-auto max-w-[1400px] px-6">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold font-manrope tracking-tight hidden sm:block">Receitas</h1>
                <div className="h-6 w-px bg-gray-300 hidden sm:block mx-2"></div>
                
                <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm transition-all hover:shadow-md">
                  <button onClick={handlePrevMonth} className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-gray-800 px-3 min-w-[160px] inline-flex justify-center text-center capitalize select-none tracking-wide">
                    {displayMonth}
                  </span>
                  <button onClick={handleNextMonth} className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors active:scale-95">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {ordenacao !== 'padrao' && (
                  <button 
                    onClick={() => setOrdenacao("padrao")}
                    className="text-sm text-red-500 hover:text-red-700 font-semibold cursor-pointer flex items-center gap-1 transition-colors mr-2"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Limpar</span>
                  </button>
                )}
                <div className="relative hidden md:block flex-1 md:w-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 hidden md:block whitespace-nowrap">Ordenar por:</span>
                    <select 
                      value={ordenacao}
                      onChange={(e) => setOrdenacao(e.target.value)}
                      className="w-full bg-white border border-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors cursor-pointer"
                    >
                      <option value="padrao">Data de Criação</option>
                      <option value="a_z">A - Z</option>
                      <option value="z_a">Z - A</option>
                      <option value="maior_valor">Maior Valor</option>
                      <option value="menor_valor">Menor Valor</option>
                    </select>
                  </div>
                </div>
                <button 
                  onClick={handleOpenCreate}
                  className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-black rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Nova Receita
                </button>
              </div>
            </div>

            {membrosAtivos.length > 1 && (
              <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar p-1">
                <button
                  onClick={() => toggleFiltroResponsavel('Todos')}
                  className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${
                    filtroUsuariosSelecionados.includes('Todos') 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  Todos
                </button>
                {membrosAtivos.map(membro => {
                  const isSelected = filtroUsuariosSelecionados.includes(membro.id);
                  return (
                    <button
                      key={membro.id}
                      onClick={() => toggleFiltroResponsavel(membro.id)}
                      className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap border ${
                        isSelected 
                          ? `${bgColors[membro.cor]} border-transparent shadow-sm ring-2 ring-offset-1 ${ringColors[membro.cor] || 'ring-slate-500'}` 
                          : `bg-white border-gray-200 text-gray-500 ${bgHoverColors[membro.cor] || 'hover:bg-slate-100 hover:text-slate-700'}`
                      }`}
                    >
                      {membro.nome}
                    </button>
                  );
                })}
              </div>
            )}

          </div>
        </div>

        <main className="mx-auto max-w-[1400px] px-6 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Receita Total
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-gray-900">{formatCurrency(totalPrevisto)}</p>
            </div>
            
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Recebido
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-blue-700">{formatCurrency(jaRecebido)}</p>
            </div>
            
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Pendente
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-amber-700">{formatCurrency(aReceber)}</p>
            </div>
          </div>

          {(() => {
            const sortedReceitas = [...receitas].sort((a, b) => {
              if (ordenacao === 'a_z') return a.descricao.localeCompare(b.descricao);
              if (ordenacao === 'z_a') return b.descricao.localeCompare(a.descricao);
              if (ordenacao === 'maior_valor') return b.valor - a.valor;
              if (ordenacao === 'menor_valor') return a.valor - b.valor;
              return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            });

            return (
              <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up">
                
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-semibold font-manrope text-gray-800">
                     {sortedReceitas.length} {sortedReceitas.length === 1 ? 'Entrada encontrada' : 'Entradas encontradas'}
                   </h2>
                </div>

            <div className="w-full overflow-x-auto no-scrollbar bg-white border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-3 px-4 text-left">Descrição</th>
                    <th className="py-3 px-4 text-center">Responsável</th>
                    <th className="py-3 px-4 text-center">Valor (R$)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center w-24">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-base divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center">
                        <div className="flex justify-center items-center">
                          <div className="w-6 h-6 border-2 border-gray-200 border-t-black rounded-full animate-spin"></div>
                        </div>
                      </td>
                    </tr>
                  ) : receitas.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-16 px-6 text-center">
                        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 font-manrope mb-2">Nenhuma receita encontrada</h3>
                          <p className="text-sm text-gray-500 mb-6">
                            Não há entradas registradas para este mês ou para o filtro selecionado. Você pode adicionar uma nova receita manualmente ou importar as do mês anterior.
                          </p>
                          <button 
                            onClick={handleImportPreviousMonth}
                            disabled={isImporting}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm disabled:opacity-50"
                          >
                            {isImporting ? (
                              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Import className="w-4 h-4" />
                            )}
                            Importar receitas do mês anterior
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    sortedReceitas.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group align-middle">
                        <td className="py-4 px-4 text-left">
                          <p className="font-semibold text-gray-800 truncate max-w-[250px]">{item.descricao}</p>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {getRespBadge(item.perfil_id)}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="font-mono font-bold text-gray-800 text-[15px]">
                            {formatCurrency(item.valor)}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className={`relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider cursor-pointer ${getStatusColor(item.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`}></span>
                            <select 
                              value={item.status}
                              onChange={(e) => updateStatusInline(item.id, e.target.value)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            >
                              <option value="Pendente">Pendente</option>
                              <option value="Recebido">Recebido</option>
                            </select>
                            {item.status}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2 transition-opacity">
                            <button 
                              onClick={() => handleEdit(item)}
                              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Editar"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteClick(item.id)}
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
          );
          })()}
        </main>

        <TransactionModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingReceita}
          onSave={handleSaveModal}
          type="receita"
        />

        {itemToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
              onClick={cancelDelete}
            ></div>
            <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden p-6 text-center animate-slide-up">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excluir Receita?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Tem certeza de que deseja excluir permanentemente esta receita? Esta ação não poderá ser desfeita.
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={cancelDelete}
                  className="px-4 py-2 font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors w-full"
                >
                  Cancelar
                </button>
                <button 
                  onClick={confirmDelete}
                  className="px-4 py-2 font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all active:scale-95 w-full"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}

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
