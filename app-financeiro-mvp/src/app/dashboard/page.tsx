'use client';
import { useState } from 'react';
import Link from 'next/link';
import TransactionModal from '@/components/TransactionModal';
import AppLayout from '@/components/AppLayout';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Junho 2026');
  const [activeTab, setActiveTab] = useState<'leo' | 'bia'>('leo');

  const auvpData = {
    leo: {
      totalRec: 10690.00,
      totalUsado: 9703.34,
      porcentagem: 90.8,
      categorias: [
        { nome: 'Essencial', meta: 40, rec: 4276.00, usadaPerc: 36.1, usado: 3854.34, bgCor: 'bg-blue-200/50', fillCor: 'bg-blue-500' },
        { nome: 'Investimento', meta: 25, rec: 2672.50, usadaPerc: 0.0, usado: 0, bgCor: 'bg-yellow-200/50', fillCor: 'bg-yellow-400' },
        { nome: 'Prazer', meta: 10, rec: 1069.00, usadaPerc: 7.5, usado: 800.00, bgCor: 'bg-pink-200/50', fillCor: 'bg-pink-500' },
        { nome: 'Meta Planejada', meta: 5, rec: 534.50, usadaPerc: 0.0, usado: 0, bgCor: 'bg-green-200/50', fillCor: 'bg-green-500' },
        { nome: 'Oportunidade', meta: 5, rec: 534.50, usadaPerc: 14.0, usado: 1500.00, bgCor: 'bg-teal-200/50', fillCor: 'bg-teal-500' },
        { nome: 'Conforto', meta: 10, rec: 1069.00, usadaPerc: 31.7, usado: 3384.09, bgCor: 'bg-purple-200/50', fillCor: 'bg-purple-500' },
        { nome: 'Aumentar Renda', meta: 5, rec: 534.50, usadaPerc: 1.5, usado: 164.91, bgCor: 'bg-indigo-200/50', fillCor: 'bg-indigo-500' },
      ]
    },
    bia: {
      totalRec: 5010.00,
      totalUsado: 3939.60,
      porcentagem: 78.6,
      categorias: [
        { nome: 'Essencial', meta: 40, rec: 2004.00, usadaPerc: 34.0, usado: 1702.86, bgCor: 'bg-blue-200/50', fillCor: 'bg-blue-500' },
        { nome: 'Investimento', meta: 25, rec: 1252.50, usadaPerc: 0.0, usado: 0, bgCor: 'bg-yellow-200/50', fillCor: 'bg-yellow-400' },
        { nome: 'Prazer', meta: 10, rec: 501.00, usadaPerc: 24.4, usado: 1224.05, bgCor: 'bg-pink-200/50', fillCor: 'bg-pink-500' },
        { nome: 'Meta Planejada', meta: 5, rec: 250.50, usadaPerc: 0.0, usado: 0, bgCor: 'bg-green-200/50', fillCor: 'bg-green-500' },
        { nome: 'Oportunidade', meta: 5, rec: 250.50, usadaPerc: 0.0, usado: 0, bgCor: 'bg-teal-200/50', fillCor: 'bg-teal-500' },
        { nome: 'Conforto', meta: 10, rec: 501.00, usadaPerc: 9.7, usado: 483.47, bgCor: 'bg-purple-200/50', fillCor: 'bg-purple-500' },
        { nome: 'Aumentar Renda', meta: 5, rec: 250.50, usadaPerc: 10.6, usado: 529.22, bgCor: 'bg-indigo-200/50', fillCor: 'bg-indigo-500' },
      ]
    },
    casal: {
      totalRec: 15700.00,
      totalUsado: 13642.94,
      porcentagem: 86.8,
      categorias: [
        { nome: 'Essencial', meta: 40, rec: 6280.00, usadaPerc: 35.3, usado: 5557.20, bgCor: 'bg-blue-200/50', fillCor: 'bg-blue-500' },
        { nome: 'Investimento', meta: 25, rec: 3925.00, usadaPerc: 0.0, usado: 0, bgCor: 'bg-yellow-200/50', fillCor: 'bg-yellow-400' },
        { nome: 'Prazer', meta: 10, rec: 1570.00, usadaPerc: 12.8, usado: 2024.05, bgCor: 'bg-pink-200/50', fillCor: 'bg-pink-500' },
        { nome: 'Meta Planejada', meta: 5, rec: 785.00, usadaPerc: 0.0, usado: 0, bgCor: 'bg-green-200/50', fillCor: 'bg-green-500' },
        { nome: 'Oportunidade', meta: 5, rec: 785.00, usadaPerc: 9.5, usado: 1500.00, bgCor: 'bg-teal-200/50', fillCor: 'bg-teal-500' },
        { nome: 'Conforto', meta: 10, rec: 1570.00, usadaPerc: 24.6, usado: 3867.56, bgCor: 'bg-purple-200/50', fillCor: 'bg-purple-500' },
        { nome: 'Aumentar Renda', meta: 5, rec: 785.00, usadaPerc: 4.4, usado: 694.13, bgCor: 'bg-indigo-200/50', fillCor: 'bg-indigo-500' },
      ]
    }
  };

  const currentData = auvpData[activeTab];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const colorMap: Record<string, string> = {
    'bg-blue-500': '#3b82f6',
    'bg-yellow-400': '#facc15',
    'bg-pink-500': '#ec4899',
    'bg-green-500': '#22c55e',
    'bg-teal-500': '#14b8a6',
    'bg-purple-500': '#a855f7',
    'bg-indigo-500': '#6366f1',
  };

  const rendaCasal = auvpData.leo.totalRec + auvpData.bia.totalRec;
  const despesaCasal = auvpData.leo.totalUsado + auvpData.bia.totalUsado;
  const saldoProjetoCasal = rendaCasal - despesaCasal;

  const percLeo = (auvpData.leo.totalRec / rendaCasal) * 100;
  const percBia = (auvpData.bia.totalRec / rendaCasal) * 100;

  const saldoResultado = currentData.totalRec - currentData.totalUsado;
  const isSaldoPositivo = saldoResultado >= 0;
  const colorClassSaldo = isSaldoPositivo ? 'text-emerald-800' : 'text-red-800';
  const bgClassSaldo = isSaldoPositivo ? 'bg-emerald-100/80 border-emerald-300' : 'bg-red-100/80 border-red-300';

  return (
    <AppLayout>
      <div className="relative font-sans text-[#0f0f0f]">
        {/* Top Header */}
        <div className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200 py-4 mb-8">
          <div className="mx-auto max-w-[1400px] px-6 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold font-manrope tracking-tight">Resumo: {selectedMonth}</h1>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-full py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black hidden md:block"
              >
                <option>Junho 2026</option>
                <option>Maio 2026</option>
                <option>Abril 2026</option>
              </select>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-[1400px] px-6 space-y-12 pb-12">
          {/* Main Glass Dashboard Section */}
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] animate-slide-up border border-white/60">
            <div className="flex flex-col gap-10">
              
              <header className="md:hidden">
                 <select 
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black mb-4"
                >
                  <option>Junho 2026</option>
                  <option>Maio 2026</option>
                  <option>Abril 2026</option>
                </select>
              </header>

              {/* KPIs do Casal */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Renda Total */}
                <div className="rounded-2xl p-6 transition-colors bg-white border border-gray-100 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7h6v6m0 0l-8.5 8.5-5-5L2 17"></path></svg>
                    </div>
                    <h3 className="font-semibold font-sans text-gray-500 text-sm uppercase tracking-wider">Renda (Casal)</h3>
                  </div>
                  <h4 className="text-3xl font-manrope font-semibold tracking-tight">{formatCurrency(rendaCasal)}</h4>
                  <p className="text-xs text-gray-500 mt-2 font-medium bg-green-50 text-green-700 w-max px-2 py-0.5 rounded-full">Base Junho 2026</p>
                </div>

                {/* Despesa Total */}
                <div className="rounded-2xl p-6 transition-colors bg-white border border-gray-100 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                    </div>
                    <h3 className="font-semibold font-sans text-gray-500 text-sm uppercase tracking-wider">Despesa (Casal)</h3>
                  </div>
                  <h4 className="text-3xl font-manrope font-semibold tracking-tight">{formatCurrency(despesaCasal)}</h4>
                  <p className="text-xs text-gray-500 mt-2 font-medium bg-red-50 text-red-700 w-max px-2 py-0.5 rounded-full">Projetado Junho 2026</p>
                </div>

                {/* Saldo do Mês */}
                <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-200/50 rounded-full blur-xl" />
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-semibold font-sans text-gray-600 text-sm uppercase tracking-wider">Saldo (Casal)</h3>
                  </div>
                  <h4 className="text-3xl font-manrope font-semibold tracking-tight relative z-10">{formatCurrency(saldoProjetoCasal)}</h4>
                  <p className={`text-xs mt-2 font-medium w-max px-3 py-1 rounded-full relative z-10 ${saldoProjetoCasal >= 0 ? 'text-blue-700 bg-blue-100/50' : 'text-red-700 bg-red-100/50'}`}>
                    {saldoProjetoCasal >= 0 ? 'Orçamento Saudável' : 'Atenção ao Orçamento'}
                  </p>
                </div>

                {/* Composição de Renda */}
                <div className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="font-semibold font-sans text-gray-500 text-sm uppercase tracking-wider">Proporção (Casal)</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-1">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        <span className="text-sm font-semibold text-gray-700">Leo</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold block leading-none text-gray-900">{formatCurrency(auvpData.leo.totalRec)}</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Contribui c/ {percLeo.toFixed(0)}%</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-1.5 rounded-full bg-gray-100 flex overflow-hidden">
                       <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${percLeo}%` }}></div>
                       <div className="bg-pink-500 h-full transition-all duration-1000" style={{ width: `${percBia}%` }}></div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                        <span className="text-sm font-semibold text-gray-700">Bia</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold block leading-none text-gray-900">{formatCurrency(auvpData.bia.totalRec)}</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Contribui c/ {percBia.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Layout Stack Vertical: Resumo Gerencial (AUVP) & Maiores Despesas */}
              <div className="flex flex-col gap-8 mt-4">
                
                {/* Resumo Gerencial AUVP (Full width) */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h3 className="text-2xl font-semibold font-manrope">Resumo Gerencial</h3>
                    
                    {/* Tabs */}
                    <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                      <button 
                        onClick={() => setActiveTab('leo')}
                        className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${activeTab === 'leo' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                      >
                        Leo
                      </button>
                      <button 
                        onClick={() => setActiveTab('bia')}
                        className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${activeTab === 'bia' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                      >
                        Bia
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Data Cards */}
                    {currentData.categorias.map((cat, idx) => {
                      const isPiso = cat.nome === 'Investimento' || cat.nome === 'Aumentar Renda';
                      
                      const atingimentoMeta = cat.meta > 0 ? (cat.usadaPerc / cat.meta) * 100 : 0;
                      const isOverflow = atingimentoMeta > 100;
                      const scaleMax = isOverflow ? atingimentoMeta : 100;
                      const metaMarkerPerc = (100 / scaleMax) * 100;
                      
                      const usedPerc = isOverflow ? metaMarkerPerc : (atingimentoMeta / scaleMax) * 100;
                      const overflowPerc = isOverflow ? (100 - metaMarkerPerc) : 0;
                      const saldoReais = Math.abs(cat.rec - cat.usado);
                      
                      const isHealthy = isPiso ? cat.usadaPerc >= cat.meta : cat.usadaPerc <= cat.meta;
                      
                      const cardBgClass = isHealthy ? 'bg-emerald-50/60 border-emerald-200' : 'bg-red-50/60 border-red-200';
                      const iconWrapperClass = isHealthy ? 'bg-emerald-200 text-emerald-600' : 'bg-red-200 text-red-600';

                      // Ícones Jóia Positivo e Negativo
                      const iconComponent = isHealthy ? (
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
                      ) : (
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.514"></path></svg>
                      );

                      let statusText = '';
                      let statusTextColor = '';
                      let barExcessColor = 'bg-red-500';

                      if (!isPiso) {
                        if (isHealthy) {
                          statusText = `Disponível: ${formatCurrency(saldoReais)}`;
                          statusTextColor = 'text-emerald-700';
                        } else {
                          statusText = `Ultrapassou em: ${formatCurrency(saldoReais)}`;
                          statusTextColor = 'text-red-600';
                          barExcessColor = 'bg-red-500';
                        }
                      } else {
                        if (isHealthy) {
                          statusText = `Meta atingida! 🎉 ${saldoReais > 0 ? `(+${formatCurrency(saldoReais)} extra)` : ''}`;
                          statusTextColor = 'text-emerald-700';
                          barExcessColor = cat.fillCor; 
                        } else {
                          statusText = `Falta alocar: ${formatCurrency(saldoReais)}`;
                          statusTextColor = 'text-red-600';
                        }
                      }

                      return (
                        <div key={idx} className={`flex flex-col gap-4 p-5 rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${cardBgClass}`}>
                          <div className="flex justify-between items-start">
                            {/* Coluna 1: Categoria e Meta */}
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-base text-gray-800">{cat.nome}</p>
                                <span className="text-[10px] font-bold text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                                  {isPiso ? 'Piso' : 'Teto'}
                                </span>
                              </div>
                              <p className="text-xs font-medium text-gray-500 mt-1.5">
                                Meta: {cat.meta}% <span className="text-gray-400">({formatCurrency(cat.rec)})</span>
                              </p>
                            </div>
                            
                            {/* Coluna 2: Usado com Ícone Indicador */}
                            <div className="flex items-start gap-3 text-right">
                              <div>
                                <p className="text-lg font-mono font-bold text-gray-900">{formatCurrency(cat.usado)}</p>
                                <p className={`text-xs font-bold mt-1 ${!isHealthy ? 'text-red-600' : 'text-emerald-700'}`}>
                                  {isPiso ? 'Alocado' : 'Usado'}: {cat.usadaPerc}%
                                </p>
                              </div>
                              {/* Ícone Indicador */}
                              <div className={`p-1.5 rounded-full ${iconWrapperClass}`}>
                                {iconComponent}
                              </div>
                            </div>
                          </div>
                          
                          {/* Área do Gráfico de Barra */}
                          <div>
                            <div className={`h-4 w-full rounded-full overflow-hidden relative flex ${!isHealthy && !isPiso ? 'bg-red-100' : cat.bgCor}`}>
                              <div 
                                className={`h-full transition-all duration-500 ${cat.fillCor}`} 
                                style={{ width: `${usedPerc}%` }}
                              ></div>

                              {isOverflow && (
                                <div 
                                  className={`h-full transition-all duration-500 ${barExcessColor}`}
                                  style={{ width: `${overflowPerc}%` }}
                                ></div>
                              )}

                              {isOverflow && (
                                <div 
                                  className="absolute top-0 bottom-0 border-l-[3px] border-white z-10 shadow-sm" 
                                  style={{ left: `${metaMarkerPerc}%` }}
                                ></div>
                              )}
                            </div>

                            {/* Aviso de Status */}
                            <div className="flex justify-between items-center mt-2 h-4">
                              <span className={`text-[11px] font-bold tracking-wide ${statusTextColor}`}>
                                {statusText}
                              </span>
                            </div>
                          </div>

                        </div>
                      )
                    })}

                    {/* Novo Totals Card com Gráfico de Pizza Clássico */}
                    <div className={`p-6 md:p-8 rounded-2xl border flex flex-col items-center justify-center gap-6 shadow-sm ${bgClassSaldo} md:col-span-2 relative overflow-hidden`}>
                      
                      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10 mb-0">
                        <div>
                          <h3 className={`text-2xl font-bold font-manrope ${colorClassSaldo}`}>Resultado</h3>
                          <p className={`text-sm mt-1 font-semibold opacity-80 ${colorClassSaldo}`}>
                            {isSaldoPositivo ? 'Sobrou dinheiro neste mês!' : 'Atenção: Você gastou mais do que a receita.'}
                          </p>
                        </div>
                        <div className="sm:text-right">
                          <p className={`text-3xl font-mono font-bold tracking-tight ${colorClassSaldo}`}>
                            {isSaldoPositivo ? '+' : ''}{formatCurrency(saldoResultado)}
                          </p>
                          <p className={`text-sm font-bold mt-1 opacity-80 ${colorClassSaldo}`}>
                            {currentData.porcentagem}% da receita utilizada
                          </p>
                        </div>
                      </div>

                      {/* Gráfico de Pizza SVG Puro (Design do Excel otimizado) */}
                      <div className="w-full max-w-[600px] mx-auto relative mt-2 flex-grow">
                        {/* Aumentamos consideravelmente a viewBox lateralmente (-220 a 220) para que nenhuma palavra longa seja cortada */}
                        <svg viewBox="-220 -130 440 260" className="w-full h-auto drop-shadow-md">
                          {(() => {
                            let cumulativeValueForGeometry = 0;
                            const totalUsado = currentData.totalUsado;
                            const radius = 90; // Raio ainda maior para aproveitar o espaço interno
                            
                            const getCoordinatesForPercent = (percent: number, r: number) => {
                              const angle = (percent / 100) * 2 * Math.PI - Math.PI / 2;
                              return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
                            };

                            const slices = currentData.categorias
                              .filter(cat => cat.usado > 0)
                              .map(cat => {
                                const geometryPerc = totalUsado > 0 ? (cat.usado / totalUsado) * 100 : 0;
                                const start = cumulativeValueForGeometry;
                                cumulativeValueForGeometry += geometryPerc;
                                const labelPerc = cat.usadaPerc;
                                
                                return { ...cat, geometryPerc, start, end: cumulativeValueForGeometry, labelPerc };
                              });

                            return slices.map((slice, i) => {
                              const startCoord = getCoordinatesForPercent(slice.start, radius);
                              let endCoord = getCoordinatesForPercent(slice.end, radius);
                              
                              if (slice.geometryPerc >= 99.9) {
                                endCoord = getCoordinatesForPercent(slice.start + 99.9, radius);
                              }

                              const largeArcFlag = slice.geometryPerc > 50 ? 1 : 0;
                              
                              const pathData = [
                                `M 0 0`,
                                `L ${startCoord.x} ${startCoord.y}`,
                                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endCoord.x} ${endCoord.y}`,
                                `Z`,
                              ].join(' ');

                              const midPercent = slice.start + slice.geometryPerc / 2;
                              const isRightHalf = midPercent < 50;
                              
                              // Lógica condicional: fatias muito pequenas (ex: 1.5%) não recebem texto dentro.
                              const showPercentInside = slice.geometryPerc >= 5;
                              
                              // Coordenada do texto interno (em 75% da distância até a borda)
                              const innerTextPos = getCoordinatesForPercent(midPercent, radius * 0.75);

                              // Coordenadas da linha conectora externa
                              const labelLineStart = getCoordinatesForPercent(midPercent, radius);
                              const labelLineMid = getCoordinatesForPercent(midPercent, radius + 10);
                              const labelLineEnd = { x: labelLineMid.x + (isRightHalf ? 15 : -15), y: labelLineMid.y };
                              
                              const textPosX = labelLineEnd.x + (isRightHalf ? 3 : -3);
                              
                              const percentString = `${String(slice.labelPerc).replace('.', ',')}%`;
                              const nameString = slice.nome;
                              
                              // Se for muito pequeno, jogamos a % para o lado de fora junto do nome
                              const outerLabel = showPercentInside ? nameString : `${nameString} - ${percentString}`;
                              
                              return (
                                <g key={slice.nome} className="transition-all hover:scale-[1.02] cursor-pointer origin-center">
                                  <path 
                                    d={pathData} 
                                    fill={colorMap[slice.fillCor]} 
                                    stroke="#ffffff" 
                                    strokeWidth="1.5" 
                                  />
                                  
                                  {/* Porcentagem Interna (Branca e Negrito) */}
                                  {showPercentInside && (
                                    <text 
                                      x={innerTextPos.x} 
                                      y={innerTextPos.y} 
                                      fontSize="8" 
                                      fontWeight="bold" 
                                      fill="#ffffff"
                                      textAnchor="middle"
                                      alignmentBaseline="middle"
                                      className="font-sans drop-shadow-md"
                                    >
                                      {percentString}
                                    </text>
                                  )}

                                  {/* Linha Conectora */}
                                  <polyline 
                                    points={`${labelLineStart.x},${labelLineStart.y} ${labelLineMid.x},${labelLineMid.y} ${labelLineEnd.x},${labelLineEnd.y}`} 
                                    fill="none" 
                                    stroke="#9ca3af" 
                                    strokeWidth="0.8" 
                                  />
                                  
                                  {/* Nome Externo */}
                                  <text 
                                    x={textPosX} 
                                    y={labelLineEnd.y} 
                                    fontSize="8" 
                                    fontWeight="bold" 
                                    fill="#374151"
                                    textAnchor={isRightHalf ? 'start' : 'end'}
                                    alignmentBaseline="middle"
                                    className="font-sans"
                                  >
                                    {outerLabel}
                                  </text>
                                </g>
                              )
                            });
                          })()}
                        </svg>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        {/* Modal */}
        {isModalOpen && <TransactionModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </AppLayout>
  );
}
