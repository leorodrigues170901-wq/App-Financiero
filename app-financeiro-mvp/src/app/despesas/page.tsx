'use client';
import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import TransactionModal from '@/components/TransactionModal';
import { Pencil, Trash2, Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DespesasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDespesa, setEditingDespesa] = useState<any>(null);
  
  // Controle de Mês/Ano
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)); // Junho 2026 (mês zero-index)
  const [filtroResponsavel, setFiltroResponsavel] = useState('Todos');

  const [despesas, setDespesas] = useState([
    { id: 1, descricao: 'Aluguel do Apartamento', resp: 'Casal', tipoDivisao: '50/50', auvp: 'Fixo Essencial', valor: 3500.00, status: 'Pago', categoria: 'Custo Fixo Assumido', formaPagamento: 'Conta Conjunta Itaú' },
    { id: 2, descricao: 'Energia Elétrica', resp: 'Casal', tipoDivisao: 'Proporcional à Renda', auvp: 'Fixo Essencial', valor: 285.50, status: 'Pendente', categoria: 'Custo Fixo Assumido', formaPagamento: 'Conta Conjunta Itaú' },
    { id: 3, descricao: 'Jantar Restaurante', resp: 'Leo', auvp: 'Conforto', valor: 180.00, status: 'Direcionado', categoria: 'Variável', formaPagamento: 'Fatura Cartão de Crédito' },
    { id: 4, descricao: 'Curso de Especialização', resp: 'Bia', auvp: 'Metas', valor: 450.00, status: 'Pago', categoria: 'Custo Fixo Assumido', formaPagamento: 'Conta Conjunta Itaú' },
    { id: 5, descricao: 'Assinatura Netflix', resp: 'Casal', tipoDivisao: '50/50', auvp: 'Conforto', valor: 55.90, status: 'Pendente', categoria: 'Recorrente Cancelável', formaPagamento: 'Fatura Cartão de Crédito' },
    { id: 6, descricao: 'Viagem Fim de Ano (1/10)', resp: 'Casal', tipoDivisao: 'Proporcional à Renda', auvp: 'Liberdade', valor: 800.00, status: 'Direcionado', categoria: 'Variável', formaPagamento: 'Caixinha/Reserva Separada', isParcelado: true, parcelaAtual: 1, totalParcelas: 10 },
    { id: 7, descricao: 'Academia', resp: 'Leo', auvp: 'Fixo Essencial', valor: 120.00, status: 'Pago', categoria: 'Custo Fixo Assumido', formaPagamento: 'Fatura Cartão de Crédito' },
    { id: 8, descricao: 'Cosméticos', resp: 'Bia', auvp: 'Conforto', valor: 250.00, status: 'Pendente', categoria: 'Variável', formaPagamento: 'Fatura Cartão de Crédito' },
  ]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const formattedMonth = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const displayMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

  const opcoesFiltro = ['Todos', 'Leo', 'Bia', 'Leo + Casal', 'Bia + Casal'];

  // Lógica de Filtragem
  const filteredDespesas = despesas.filter(d => {
    if (filtroResponsavel === 'Todos') return true;
    if (filtroResponsavel === 'Leo') return d.resp === 'Leo';
    if (filtroResponsavel === 'Bia') return d.resp === 'Bia';
    if (filtroResponsavel === 'Leo + Casal') return d.resp === 'Leo' || d.resp === 'Casal';
    if (filtroResponsavel === 'Bia + Casal') return d.resp === 'Bia' || d.resp === 'Casal';
    return true;
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
      case 'Pago': return 'bg-emerald-500';
      case 'Pendente': return 'bg-red-500';
      case 'Direcionado': return 'bg-amber-500';
      default: return 'bg-gray-400';
    }
  };

  const getAuvpColor = (auvp: string) => {
    switch (auvp) {
      case 'Fixo Essencial': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Conforto': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Metas': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Liberdade': return 'bg-pink-50 text-pink-700 border-pink-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRespIcon = (resp: string) => {
    if (resp === 'Leo') return <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shrink-0">L</div>;
    if (resp === 'Bia') return <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold shadow-sm shrink-0">B</div>;
    return (
      <div className="flex -space-x-2 shrink-0 justify-center">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm z-10">L</div>
        <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">B</div>
      </div>
    );
  };

  const handleOpenCreate = () => {
    setEditingDespesa(null);
    setIsModalOpen(true);
  };

  const handleEdit = (despesa: any) => {
    setEditingDespesa(despesa);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setDespesas(despesas.filter(d => d.id !== id));
  };

  const handleSaveModal = (data: any) => {
    if (editingDespesa) {
      setDespesas(despesas.map(d => d.id === editingDespesa.id ? { ...data, id: editingDespesa.id } : d));
    } else {
      setDespesas([...despesas, { ...data, id: Date.now() }]);
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
                  onClick={handleOpenCreate}
                  className="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-md font-medium text-white bg-black rounded-full px-5 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Nova Despesa
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
                Total Previsto
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-gray-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-gray-900">{formatCurrency(totalPrevisto)}</p>
            </div>
            
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Já Pago
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
              </p>
              <p className="text-3xl font-manrope font-semibold tracking-tight text-emerald-700">{formatCurrency(jaPago)}</p>
            </div>
            
            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5 truncate">
                Falta Pagar
                {filtroResponsavel !== 'Todos' && <span className="opacity-60 lowercase font-medium bg-red-100 px-2 py-0.5 rounded-full text-[10px]">({filtroResponsavel})</span>}
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
                    <th className="py-3 px-4 text-center">Responsável</th>
                    <th className="py-3 px-4 text-center">Classificação</th>
                    <th className="py-3 px-4 text-center">Valor (R$)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center w-24">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-base divide-y divide-gray-100">
                  {filteredDespesas.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500 font-medium">
                        Nenhuma despesa encontrada para esse filtro.
                      </td>
                    </tr>
                  ) : (
                    filteredDespesas.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group align-middle">
                        <td className="py-4 px-4 text-left">
                          <p className="font-semibold text-gray-800 truncate max-w-[250px]">{item.descricao}</p>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            {getRespIcon(item.resp)}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border uppercase tracking-wide ${getAuvpColor(item.auvp)}`}>
                            {item.auvp}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="font-mono font-bold text-gray-800 text-[15px]">
                            {formatCurrency(item.valor)}
                          </div>
                          {item.resp === 'Casal' && (
                            <div className="flex justify-center gap-2 mt-1.5">
                              <span className="bg-blue-500/20 text-blue-500 px-2.5 py-1 rounded text-xs font-semibold font-mono tracking-tight">
                                {formatCurrency(item.tipoDivisao === '50/50' ? item.valor * 0.5 : item.valor * 0.6)}
                              </span>
                              <span className="bg-pink-500/20 text-pink-500 px-2.5 py-1 rounded text-xs font-semibold font-mono tracking-tight">
                                {formatCurrency(item.tipoDivisao === '50/50' ? item.valor * 0.5 : item.valor * 0.4)}
                              </span>
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
