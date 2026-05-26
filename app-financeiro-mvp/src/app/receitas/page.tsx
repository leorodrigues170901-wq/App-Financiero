'use client';
import { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import TransactionModal from '@/components/TransactionModal';
import { Pencil, Trash2, Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { limparDinheiroParaBanco } from '@/lib/formatters';

export default function ReceitasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReceita, setEditingReceita] = useState<any>(null);
  
  // Controle de Mês/Ano
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)); // Junho 2026
  const [filtroResponsavel, setFiltroResponsavel] = useState('Todos');

  const [receitas, setReceitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<{perfilId: string, familiaId: string | null} | null>(null);

  const fetchReceitas = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('receitas')
      .select('*')
      .order('data', { ascending: false });
    
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
        resp: item.responsavel,
        status: item.status,
        data: item.data,
        categoria: item.categoria,
        created_at: item.created_at
      }));
      setReceitas(mapped);
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
    };
    fetchUserData();
    fetchReceitas();
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const formattedMonth = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const displayMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

  const opcoesFiltro = ['Todos', 'Leo', 'Bia'];

  // Lógica de Filtragem
  const filteredReceitas = receitas.filter(r => {
    if (filtroResponsavel === 'Todos') return true;
    return r.resp === filtroResponsavel;
  });

  // Cálculos Dinâmicos
  const totalPrevisto = filteredReceitas.reduce((acc, curr) => acc + curr.valor, 0);
  const jaRecebido = filteredReceitas.filter(r => r.status === 'Realizado' || r.status === 'Recebido').reduce((acc, curr) => acc + curr.valor, 0);
  const aReceber = filteredReceitas.filter(r => r.status !== 'Realizado' && r.status !== 'Recebido').reduce((acc, curr) => acc + curr.valor, 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recebido':
      case 'Realizado':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Pendente':
      case 'Previsto':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Recebido':
      case 'Realizado':
        return 'bg-blue-500';
      case 'Pendente':
      case 'Previsto':
        return 'bg-amber-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getRespIcon = (resp: string) => {
    if (resp === 'Leo') return <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shrink-0">L</div>;
    if (resp === 'Bia') return <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shrink-0">B</div>;
    return null;
  };

  const handleOpenCreate = () => {
    setEditingReceita(null);
    setIsModalOpen(true);
  };

  const handleEdit = (receita: any) => {
    setEditingReceita(receita);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: any) => {
    const { error } = await supabase
      .from('receitas')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erro ao deletar receita:', error);
      return;
    }

    setReceitas(receitas.filter(r => r.id !== id));
  };

  const handleSaveModal = async (data: any) => {
    if (!userData) {
      console.error('Usuário não carregado');
      return;
    }

    // 1. Limpeza Segura do valor monetário
    const safeValor = limparDinheiroParaBanco(data.valor);
    
    const dbData = {
      descricao: data.descricao,
      valor: safeValor,
      responsavel: data.resp,
      status: data.status,
      categoria: data.categoria || 'Geral', // Default caso não venha
      perfil_id: userData.perfilId,
      familia_id: userData.familiaId
    };

    if (editingReceita) {
      // Modo de Edição: Atualiza o item existente
      const { error } = await supabase
        .from('receitas')
        .update(dbData)
        .eq('id', editingReceita.id);
        
      if (error) {
        console.error('Erro ao atualizar receita:', error);
        return;
      }
      
      fetchReceitas();
    } else {
      // Criação: Insere o novo registro
      const { error } = await supabase
        .from('receitas')
        .insert([dbData]);
        
      if (error) {
        console.error('Erro ao inserir receita:', error);
        return;
      }
      
      fetchReceitas();
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
                <h1 className="text-xl font-bold font-manrope tracking-tight hidden sm:block">Receitas</h1>
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
                    placeholder="Buscar receita..." 
                    className="w-full bg-white border border-gray-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                  />
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

            <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {opcoesFiltro.map(opcao => (
                <button
                  key={opcao}
                  onClick={() => setFiltroResponsavel(opcao)}
                  className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap ${
                    filtroResponsavel === opcao 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {opcao}
                </button>
              ))}
            </div>

          </div>
        </div>

        <main className="mx-auto max-w-[1400px] px-6 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Receita Total
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-gray-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-gray-900">{formatCurrency(totalPrevisto)}</p>
            </div>
            
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Já Recebido
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-blue-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-blue-700">{formatCurrency(jaRecebido)}</p>
            </div>
            
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                A Receber
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-amber-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-amber-700">{formatCurrency(aReceber)}</p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up">
            
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-semibold font-manrope text-gray-800">
                 {filteredReceitas.length} {filteredReceitas.length === 1 ? 'Entrada encontrada' : 'Entradas encontradas'}
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
                  ) : filteredReceitas.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-gray-500 font-medium">
                        Nenhuma receita encontrada. Adicione sua primeira entrada!
                      </td>
                    </tr>
                  ) : (
                    filteredReceitas.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group align-middle">
                        <td className="py-4 px-4 text-left">
                          <p className="font-semibold text-gray-800 truncate max-w-[250px]">{item.descricao}</p>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {getRespIcon(item.resp)}
                            <span className="text-sm font-semibold text-gray-700">{item.resp}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="font-mono font-bold text-gray-800 text-[15px]">
                            {formatCurrency(item.valor)}
                          </div>
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
          initialData={editingReceita}
          onSave={handleSaveModal}
          type="receita"
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
