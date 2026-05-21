'use client';
import AppLayout from '@/components/AppLayout';

export default function HistoricoPage() {
  return (
    <AppLayout>
      <div className="relative font-sans text-[#0f0f0f] pb-24">
        <div className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200 py-4 mb-8">
          <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold font-manrope tracking-tight">Histórico Financeiro</h1>
              <p className="text-xs text-gray-500 font-medium">Evolução do Saldo e Categorias AUVP</p>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] border border-white/60 animate-slide-up">
            
            <header className="mb-8">
              <h2 className="text-2xl font-semibold font-manrope">Desempenho Anual (2026)</h2>
              <p className="text-sm text-gray-600 mt-1">Como suas alocações de dinheiro estão variando durante o tempo.</p>
            </header>

            {/* Simulação de Gráfico Evolutivo */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-700 mb-6">Evolução do Saldo Projetado (Linha)</h3>
              <div className="h-64 flex items-end gap-2 md:gap-6 justify-between px-2 pb-4 border-b border-gray-200 relative">
                <div className="absolute left-0 bottom-0 w-full h-full flex flex-col justify-between pointer-events-none">
                  <div className="border-b border-dashed border-gray-200 w-full"></div>
                  <div className="border-b border-dashed border-gray-200 w-full"></div>
                  <div className="border-b border-dashed border-gray-200 w-full"></div>
                  <div className="border-b border-dashed border-gray-200 w-full"></div>
                </div>
                
                {/* Barras/Linhas Simuladas */}
                <div className="w-full bg-blue-100 rounded-t-md relative group hover:bg-blue-200 transition-colors" style={{ height: '40%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Jan</span>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative group hover:bg-blue-200 transition-colors" style={{ height: '55%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Fev</span>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative group hover:bg-blue-200 transition-colors" style={{ height: '45%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Mar</span>
                </div>
                <div className="w-full bg-blue-500 rounded-t-md relative group shadow-[0_0_15px_rgba(59,130,246,0.3)]" style={{ height: '80%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600">Abr</span>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative group hover:bg-blue-200 transition-colors" style={{ height: '70%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Mai</span>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative group hover:bg-blue-200 transition-colors" style={{ height: '75%' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Jun</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2">
                <span>Jan</span><span>Fev</span><span>Mar</span><span className="text-blue-600">Abr</span><span>Mai</span><span>Jun</span>
              </div>
            </div>

            {/* Simulação de Alocações AUVP Histórico */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-700 mb-6">Alocação AUVP (Trimestre Atual)</h3>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-600">Junho</div>
                  <div className="flex-1 h-4 flex rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: '40%' }} title="Fixo"></div>
                    <div className="bg-purple-500 h-full" style={{ width: '30%' }} title="Conforto"></div>
                    <div className="bg-green-500 h-full" style={{ width: '10%' }} title="Metas"></div>
                    <div className="bg-yellow-400 h-full" style={{ width: '20%' }} title="Liberdade"></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-600">Maio</div>
                  <div className="flex-1 h-4 flex rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: '45%' }} title="Fixo"></div>
                    <div className="bg-purple-500 h-full" style={{ width: '25%' }} title="Conforto"></div>
                    <div className="bg-green-500 h-full" style={{ width: '15%' }} title="Metas"></div>
                    <div className="bg-yellow-400 h-full" style={{ width: '15%' }} title="Liberdade"></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium text-gray-600">Abril</div>
                  <div className="flex-1 h-4 flex rounded-full overflow-hidden opacity-50">
                    <div className="bg-blue-500 h-full" style={{ width: '50%' }} title="Fixo"></div>
                    <div className="bg-purple-500 h-full" style={{ width: '30%' }} title="Conforto"></div>
                    <div className="bg-green-500 h-full" style={{ width: '10%' }} title="Metas"></div>
                    <div className="bg-yellow-400 h-full" style={{ width: '10%' }} title="Liberdade"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-[11px] font-semibold uppercase tracking-wider text-gray-500 justify-center">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Fixo Essencial</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-purple-500"></div> Conforto</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500"></div> Metas</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-yellow-400"></div> Lib. Financeira</div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </AppLayout>
  );
}
