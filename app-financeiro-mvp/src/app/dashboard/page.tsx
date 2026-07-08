'use client';
import AppLayout from '@/components/AppLayout';
import IncomeExpenseChart from '@/components/dashboard/IncomeExpenseChart';
import AuvpChart from '@/components/dashboard/AuvpChart';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="relative font-sans text-[#0f0f0f] min-h-screen pb-24 bg-gray-50/30">
        {/* Header */}
        <div className="bg-white sticky top-0 z-40 border-b border-gray-200 py-5 mb-8 shadow-sm">
          <div className="mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-xl font-bold font-manrope tracking-tight text-gray-900">Dashboard Gerencial (BI)</h1>
          </div>
        </div>

        <main className="mx-auto max-w-[1400px] px-6 space-y-10 animate-slide-up">
          <IncomeExpenseChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <AuvpChart />
            <div></div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
