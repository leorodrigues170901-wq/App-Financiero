'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Resumo', href: '/dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'Receitas', href: '/receitas', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { name: 'Despesas', href: '/despesas', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z' },
    { name: 'Histórico', href: '/historico', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
  ];

  return (
    <div className="min-h-screen bg-[#cfddea] flex flex-col md:flex-row">
      {/* Spacer para a Sidebar fixa */}
      <div className="hidden md:block w-20 flex-shrink-0"></div>

      {/* Sidebar Desktop (Retrátil) */}
      <aside className="group fixed hidden md:flex flex-col w-20 hover:w-64 transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hover:shadow-[4px_0_24px_rgba(0,0,0,0.08)] min-h-screen top-0 left-0 overflow-hidden z-50">
        <div className="p-6 flex items-center h-20">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
            F
          </div>
          <h1 className="text-xl font-bold font-manrope tracking-tight text-[#0f0f0f] ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Familia Finance</h1>
        </div>
        <nav className="flex-1 px-3 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center p-3 rounded-2xl transition-all ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-white/60 hover:text-black'} overflow-hidden`} title={item.name}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                  <span className="font-semibold text-sm ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-gray-100 overflow-hidden">
          <Link href="/">
            <div className="flex items-center px-1 py-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors" title="Sair">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Sair</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">
        {children}
      </div>

      {/* Bottom Nav Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 px-6 py-3 pb-safe flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1">
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                </svg>
              </div>
              <span className={`text-[10px] font-semibold ${isActive ? 'text-black' : 'text-gray-500'}`}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
