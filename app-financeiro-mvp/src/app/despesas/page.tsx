'use client';
import { useState, useEffect, useRef } from 'react';
import AppLayout from '@/components/AppLayout';
import TransactionModal from '@/components/TransactionModal';
import { Pencil, Trash2, Plus, Search, ChevronLeft, ChevronRight, Copy, Loader2, Import, SlidersHorizontal, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { limparDinheiroParaBanco } from '@/lib/formatters';
import { useMonth } from '@/contexts/MonthContext';

const STATUS_OPCOES = ['Pendente', 'Realizado'];
const AUVP_OPCOES = ['Essencial', 'Investimento', 'Prazer', 'Meta Planejada', 'Oportunidade', 'Conforto', 'Aumentar Renda'];
const GASTOS_OPCOES = ['Custo Fixo Assumido', 'Custo Recorrente Cancelável', 'Custo Recorrente Planejado', 'Custo Variável'];

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
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  
  const { currentDate, setCurrentDate } = useMonth();
  const [filtroUsuarios, setFiltroUsuarios] = useState<string[]>([]);
  const [ordenacao, setOrdenacao] = useState("padrao");
  const [importError, setImportError] = useState<React.ReactNode | string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && itemToDelete) {
        confirmDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [itemToDelete]);

  const [despesas, setDespesas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<{perfilId: string, familiaId: string | null} | null>(null);
  const [membrosAtivos, setMembrosAtivos] = useState<any[]>([]);
  const [isImporting, setIsImporting] = useState(false);
  
  const [filtroStatus, setFiltroStatus] = useState<string[]>([]);
  const [filtroAUVP, setFiltroAUVP] = useState<string[]>([]);
  const [filtroGastos, setFiltroGastos] = useState<string[]>([]);
  const [filtroGastosIndividuais, setFiltroGastosIndividuais] = useState<string[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if ((event.target as Element).closest(".user-filter-btn")) return;
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const toggleFiltro = (tipo: 'status' | 'auvp' | 'gastos', valor: string) => {
    if (tipo === 'status') {
      setFiltroStatus(prev => prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]);
    } else if (tipo === 'auvp') {
      setFiltroAUVP(prev => prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]);
    } else if (tipo === 'gastos') {
      setFiltroGastos(prev => prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]);
    }
  };

  const fetchDespesas = async () => {
    setLoading(true);
    
    const anoStr = currentDate.getFullYear();
    const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
    const ultimoDiaAtual = new Date(anoStr, currentDate.getMonth() + 1, 0).getDate();
    const startOfCurrentMonth = `${anoStr}-${mesAtualStr}-01`;
    const endOfCurrentMonth = `${anoStr}-${mesAtualStr}-${String(ultimoDiaAtual).padStart(2, '0')}`;

    const { data, error } = await supabase
      .from('despesas')
      .select('*')
      .gte('data', startOfCurrentMonth)
      .lte('data', endOfCurrentMonth)
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
        categoria_gastos: item.categoria_gastos || item.categoria || 'Variável',
        valor: Number(item.valor),
        status: item.status || 'Pendente',
        parcelado: item.parcelado || item.is_parcelado || false,
        parcela_atual: item.parcela_atual || 1,
        total_parcelas: item.total_parcelas || 1,
        data: item.data,
        created_at: item.created_at
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
    setImportError(null);
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
  const qtdFiltrosAtivos = filtroStatus.length + filtroAUVP.length + filtroGastos.length + filtroGastosIndividuais.length;

  const filteredDespesas = despesas.filter(d => {
    let passUsuario = true;
    if (filtroUsuarios.length > 0) {
      const idsDaDespesa = d.responsaveis_divisao?.map((r: any) => r.id) || [];
      passUsuario = filtroUsuarios.some(id => idsDaDespesa.includes(id));
    }
    
    const passStatus = filtroStatus.length === 0 || filtroStatus.includes(d.status);
    const passAUVP = filtroAUVP.length === 0 || filtroAUVP.includes(d.classificacao_auvp);
    const passGastos = filtroGastos.length === 0 || filtroGastos.includes(d.categoria_gastos);
    const passIndividual = filtroGastosIndividuais.length === 0 || (d.responsaveis_divisao?.length === 1 && filtroGastosIndividuais.includes(d.responsaveis_divisao[0].id));

    return passUsuario && passStatus && passAUVP && passGastos && passIndividual;
  });

  // Função auxiliar para obter o valor real (fatiado ou integral)
  const getValorConsiderado = (despesa: any) => {
    if (filtroUsuarios.length === 0) return despesa.valor;
    
    const responsaveis = despesa.responsaveis_divisao || [];
    const fatiasFiltradas = responsaveis.filter((r: any) => filtroUsuarios.includes(r.id));
    
    if (fatiasFiltradas.length > 0) {
      return fatiasFiltradas.reduce((sum: number, r: any) => sum + Number(r.valor || 0), 0);
    }
    
    return despesa.valor;
  };

  // Cálculos Dinâmicos
  const totalPrevisto = filteredDespesas.reduce((acc, curr) => acc + getValorConsiderado(curr), 0);
  const jaPago = filteredDespesas.filter(d => d.status === 'Realizado').reduce((acc, curr) => acc + getValorConsiderado(curr), 0);
  const faltaPagar = filteredDespesas.filter(d => d.status !== 'Realizado').reduce((acc, curr) => acc + getValorConsiderado(curr), 0);

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

  const updateStatusInline = async (id: string, novoStatus: string) => {
    setDespesas(prev => prev.map(d => d.id === id ? { ...d, status: novoStatus } : d));
    const { error } = await supabase
      .from("despesas")
      .update({ status: novoStatus })
      .eq("id", id);
      
    if (error) {
      console.error("Erro ao atualizar status:", error);
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

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    const { error } = await supabase
      .from('despesas')
      .delete()
      .eq('id', itemToDelete);

    if (error) {
      console.error('Erro ao deletar despesa:', error);
      return;
    }

    setDespesas(despesas.filter(d => d.id !== itemToDelete));
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

    const safeValor = Number(String(data.valor).replace(/\./g, "").replace(",", "."));
    
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
      const dataFormatada = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-01`;
      dbData.data = dataFormatada;
      
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
      setImportError(null);
      
      const anoStr = currentDate.getFullYear();
      const mesAtualStr = String(currentDate.getMonth() + 1).padStart(2, '0');
      const ultimoDiaAtual = new Date(anoStr, currentDate.getMonth() + 1, 0).getDate();
      const dataMesAtual = `${anoStr}-${mesAtualStr}-01`;
      const startOfCurrentMonth = `${anoStr}-${mesAtualStr}-01`;
      const endOfCurrentMonth = `${anoStr}-${mesAtualStr}-${String(ultimoDiaAtual).padStart(2, '0')}`;

      const prevMonthDate = new Date(anoStr, currentDate.getMonth() - 1, 1);
      const prevAnoStr = prevMonthDate.getFullYear();
      const prevMesStr = String(prevMonthDate.getMonth() + 1).padStart(2, '0');
      const prevUltimoDia = new Date(prevAnoStr, prevMonthDate.getMonth() + 1, 0).getDate();
      const startOfPrevMonth = `${prevAnoStr}-${prevMesStr}-01`;
      const endOfPrevMonth = `${prevAnoStr}-${prevMesStr}-${String(prevUltimoDia).padStart(2, '0')}`;

      // 1. Busca Despesas do Mês Anterior
      const { data: despesasAnteriores, error: fetchError } = await supabase
        .from('despesas')
        .select('*')
        .gte('data', startOfPrevMonth)
        .lte('data', endOfPrevMonth);

      if (fetchError) throw fetchError;

      // Aplica a Regra de Elegibilidade para Importação
      const despesasParaImportar = (despesasAnteriores || []).filter(d => {
        const isParcelado = d.parcelado || d.is_parcelado;
        if (isParcelado) return d.parcela_atual < d.total_parcelas;
        return ['Custo Fixo Assumido', 'Custo Recorrente Cancelável', 'Custo Recorrente Planejado'].includes(d.categoria_gastos);
      });

      // 2. Busca Receitas do Mês Atual
      let queryReceitas = supabase
        .from('receitas')
        .select('valor')
        .gte('data', startOfCurrentMonth)
        .lte('data', endOfCurrentMonth);
      
      if (userData?.familiaId) {
        queryReceitas = queryReceitas.eq('familia_id', userData.familiaId);
      } else {
        queryReceitas = queryReceitas.eq('perfil_id', userData?.perfilId);
      }

      const { data: receitasAtuais, error: recError } = await queryReceitas;
      if (recError) throw recError;

      const somaReceitas = (receitasAtuais || []).reduce((acc, curr) => acc + Number(curr.valor), 0);

      // 3. O BLOQUEIO DE CONSCIÊNCIA INTELIGENTE
      if (despesasParaImportar.length === 0 && somaReceitas <= 0) {
        setImportError(
          <div className="flex flex-col gap-1">
            <span className="font-bold text-red-600">Atenção Dupla!</span>
            <span className="text-sm text-red-500">Não há despesas válidas no mês passado para importar E você ainda não registrou receitas neste mês. Registre suas receitas primeiro.</span>
          </div>
        );
        return;
      }

      if (despesasParaImportar.length > 0 && somaReceitas <= 0) {
        setImportError(
          <div className="flex flex-col gap-1">
            <span className="font-bold text-red-600">Bloqueio de Consciência!</span>
            <span className="text-sm text-red-500">Há <strong>{despesasParaImportar.length} despesa(s)</strong> prontas para importação, mas nenhuma receita registrada neste mês. O sistema exige a entrada de receitas antes de assumir novos gastos.</span>
          </div>
        );
        return;
      }

      if (despesasParaImportar.length === 0 && somaReceitas > 0) {
        setImportError(
          <div className="flex flex-col gap-1">
            <span className="font-bold text-red-600">Tudo limpo!</span>
            <span className="text-sm text-red-500">Não encontramos despesas fixas ou parcelas ativas no mês anterior para importar.</span>
          </div>
        );
        return;
      }

      // 4. Executa a Inserção Limpa
      const novasDespesas = despesasParaImportar.map(d => {
        const { id, created_at, updated_at, ...rest } = d;
        const isParcelado = rest.parcelado || rest.is_parcelado;
        return {
          ...rest,
          data: dataMesAtual,
          status: 'Pendente',
          parcela_atual: isParcelado ? (rest.parcela_atual || 1) + 1 : rest.parcela_atual
        };
      });

      const { error: insertError } = await supabase.from('despesas').insert(novasDespesas);
      if (insertError) throw insertError;

      fetchDespesas();

    } catch (err) {
      console.error('Erro inesperado na importação:', err);
    } finally {
      setIsImporting(false);
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
                <h1 className="text-xl font-bold font-manrope tracking-tight hidden sm:block">Despesas</h1>
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
                <div className="relative hidden md:block flex-1 md:w-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 hidden md:block whitespace-nowrap">Ordenar por:</span>
                    <select 
                      value={ordenacao}
                      onChange={(e) => setOrdenacao(e.target.value)}
                      className="w-full bg-white border border-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors cursor-pointer"
                    >
                      <option value="padrao">Padrão (Data de Criação)</option>
                      <optgroup label="Descrição">
                        <option value="descricao_az">A a Z</option>
                        <option value="descricao_za">Z a A</option>
                      </optgroup>
                      <optgroup label="Classificação AUVP">
                        <option value="auvp_az">A a Z</option>
                        <option value="auvp_za">Z a A</option>
                      </optgroup>
                      <optgroup label="Valor (R$)">
                        <option value="maior_valor">Maior Valor</option>
                        <option value="menor_valor">Menor Valor</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {(qtdFiltrosAtivos > 0 || ordenacao !== 'padrao') && (
                  <button 
                    onClick={() => {
                      setFiltroStatus([]);
                      setFiltroAUVP([]);
                      setFiltroGastos([]);
                      setFiltroGastosIndividuais([]);
                      setOrdenacao("padrao");
                    }}
                    className="text-sm text-red-500 hover:text-red-700 font-semibold cursor-pointer flex items-center gap-1 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Limpar</span>
                  </button>
                )}
                <div className="relative" ref={filterMenuRef}>
                  <button 
                    onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                    className={`relative inline-flex items-center justify-center gap-2 transition-all hover:shadow-md font-medium rounded-full px-4 py-2 text-sm whitespace-nowrap shrink-0 border ${isFilterMenuOpen || qtdFiltrosAtivos > 0 ? 'bg-zinc-100 border-zinc-300 text-zinc-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="hidden sm:inline">Filtros</span>
                    {qtdFiltrosAtivos > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                        {qtdFiltrosAtivos}
                      </span>
                    )}
                  </button>
                  
                  {isFilterMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-[320px] sm:w-[360px] bg-zinc-900 text-zinc-100 rounded-2xl shadow-xl border border-zinc-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                      <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                        <h3 className="font-semibold text-sm">Filtros Avançados</h3>
                        <button onClick={() => setIsFilterMenuOpen(false)} className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="p-4 space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar">
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Status</h4>
                          <div className="space-y-2">
                            {STATUS_OPCOES.map(opcao => (
                              <label key={opcao} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500"
                                  checked={filtroStatus.includes(opcao)}
                                  onChange={() => toggleFiltro('status', opcao)}
                                />
                                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{opcao}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Classificação AUVP</h4>
                          <div className="space-y-2">
                            {AUVP_OPCOES.map(opcao => (
                              <label key={opcao} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500"
                                  checked={filtroAUVP.includes(opcao)}
                                  onChange={() => toggleFiltro('auvp', opcao)}
                                />
                                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{opcao}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Categoria de Gastos</h4>
                          <div className="space-y-2">
                            {GASTOS_OPCOES.map(opcao => (
                              <label key={opcao} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500"
                                  checked={filtroGastos.includes(opcao)}
                                  onChange={() => toggleFiltro('gastos', opcao)}
                                />
                                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{opcao}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Gastos 100% Individuais</h4>
                          <div className="space-y-2">
                            {membrosAtivos.map(membro => (
                              <label key={membro.id} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded border-zinc-600 text-blue-500 focus:ring-blue-500 bg-zinc-800 accent-blue-500"
                                  checked={filtroGastosIndividuais.includes(membro.id)}
                                  onChange={() => {
                                    setFiltroGastosIndividuais(prev => 
                                      prev.includes(membro.id) ? prev.filter(v => v !== membro.id) : [...prev, membro.id]
                                    );
                                  }}
                                />
                                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{membro.nome_usuario}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border-t border-zinc-800 bg-zinc-950">
                        <button 
                          onClick={() => {
                            setFiltroStatus([]);
                            setFiltroAUVP([]);
                            setFiltroGastos([]);
                            setFiltroGastosIndividuais([]);
                            setOrdenacao("padrao");
                          }}
                          className="w-full py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                        >
                          Limpar Filtros
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={handleOpenCreate}
                  className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-black rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Nova Despesa
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar p-1">
              <button
                onClick={() => setFiltroUsuarios([])}
                className={`user-filter-btn px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${
                  filtroUsuarios.length === 0 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Todos
              </button>
              {membrosAtivos.map(membro => {
                const isActive = filtroUsuarios.includes(membro.id);
                const cor = membro.cor_perfil || 'slate';
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
                    className={`user-filter-btn px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap border ${isActive ? `${bgColors[cor] || bgColors.slate} border-transparent shadow-sm ring-2 ring-offset-1 ${ringColors[cor] || 'ring-slate-500'}` : `bg-white border-gray-200 text-gray-500 ${bgHoverColors[cor] || 'hover:bg-slate-100 hover:text-slate-700'}`}`}
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

          {(() => {
            const sortedData = [...filteredDespesas].sort((a, b) => {
              if (ordenacao === 'descricao_az') return a.descricao.localeCompare(b.descricao);
              if (ordenacao === 'descricao_za') return b.descricao.localeCompare(a.descricao);
              if (ordenacao === 'auvp_az') return a.classificacao_auvp.localeCompare(b.classificacao_auvp);
              if (ordenacao === 'auvp_za') return b.classificacao_auvp.localeCompare(a.classificacao_auvp);
              if (ordenacao === 'maior_valor') return b.valor - a.valor;
              if (ordenacao === 'menor_valor') return a.valor - b.valor;
              if (ordenacao === 'padrao') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
              return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            });

            return (
              <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up">
                
                {importError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm font-semibold animate-fade-in shadow-sm">
                    {importError}
                  </div>
                )}

                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-semibold font-manrope text-gray-800">
                     {sortedData.length} {sortedData.length === 1 ? 'Lançamento encontrado' : 'Lançamentos encontrados'}
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
                          <p className="text-sm text-gray-500 mb-6">
                            Não há registros de despesas para este mês. Adicione seu primeiro lançamento!
                          </p>
                          <button 
                            onClick={handleImportarMesAnterior}
                            disabled={isImporting}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm disabled:opacity-50"
                          >
                            {isImporting ? (
                              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Import className="w-4 h-4" />
                            )}
                            Importar despesas do mês anterior
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    sortedData.map((item) => (
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
                          <div className={`relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider cursor-pointer ${getStatusColor(item.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(item.status)}`}></span>
                            <select 
                              value={item.status}
                              onChange={(e) => updateStatusInline(item.id, e.target.value)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            >
                              <option value="Pendente">Pendente</option>
                              <option value="Realizado">Realizado</option>
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
          initialData={editingDespesa}
          onSave={handleSaveModal}
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excluir Despesa?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Tem certeza de que deseja excluir permanentemente esta despesa? Esta ação não poderá ser desfeita.
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
