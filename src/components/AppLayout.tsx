'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [headerData, setHeaderData] = useState<{
    nomeUsuario: string;
    nomeFamilia: string;
    participantes: { id: string, nome: string, cor: string }[];
  } | null>(null);
  const [isLoadingHeader, setIsLoadingHeader] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setIsLoadingHeader(false);
          return;
        }

        const { data: perfil } = await supabase
          .from('perfis')
          .select('nome_usuario')
          .eq('id', user.id)
          .single();

        const { data: membro } = await supabase
          .from('membros_familia')
          .select('familia_id')
          .eq('perfil_id', user.id)
          .in('status', ['ativo', 'host'])
          .single();

        if (!membro) {
          setHeaderData({
            nomeUsuario: perfil?.nome_usuario || 'Usuário',
            nomeFamilia: 'Nenhuma Família',
            participantes: []
          });
          setIsLoadingHeader(false);
          return;
        }

        const { data: familia } = await supabase
          .from('familias')
          .select('nome')
          .eq('id', membro.familia_id)
          .single();

        const { data: participantesData } = await supabase
          .from('membros_familia')
          .select('perfil_id')
          .eq('familia_id', membro.familia_id)
          .in('status', ['ativo', 'host']);

        let participantesNomes: { id: string, nome: string, cor: string }[] = [];
        if (participantesData && participantesData.length > 0) {
          const perfilIds = participantesData.map(p => p.perfil_id);
          const { data: perfisParticipantes } = await supabase
            .from('perfis')
            .select('id, nome_usuario, cor_perfil')
            .in('id', perfilIds);

          if (perfisParticipantes) {
            participantesNomes = perfisParticipantes.map(p => ({
              id: p.id,
              nome: p.id === user.id ? 'Você' : (p.nome_usuario || 'Usuário'),
              cor: p.cor_perfil || 'slate'
            }));
          }
        }

        setHeaderData({
          nomeUsuario: perfil?.nome_usuario || 'Usuário',
          nomeFamilia: familia?.nome || 'Família',
          participantes: participantesNomes
        });
      } catch (err) {
        console.error('Erro ao carregar header:', err);
      } finally {
        setIsLoadingHeader(false);
      }
    }

    fetchHeaderData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const navItems = [
    { name: 'Resumo', href: '/dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'Receitas', href: '/receitas', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { name: 'Despesas', href: '/despesas', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z' },
    { name: 'Histórico', href: '/historico', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
  ];

  const textColors: Record<string, string> = {
    blue: "text-blue-600",
    pink: "text-pink-600",
    emerald: "text-emerald-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
    teal: "text-teal-600",
    cyan: "text-cyan-600",
    indigo: "text-indigo-600",
    rose: "text-rose-600",
    orange: "text-orange-600",
    slate: "text-slate-600",
  };

  return (
    <div className="min-h-screen bg-[#cfddea] flex flex-col md:flex-row">
      {/* Spacer para a Sidebar fixa */}
      <div className="hidden md:block w-20 flex-shrink-0"></div>

      {/* Sidebar Desktop (Retrátil) */}
      <aside 
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        className={`fixed hidden md:flex flex-col transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.02)] min-h-screen top-0 left-0 overflow-hidden z-50 ${isSidebarExpanded ? 'w-64 shadow-[4px_0_24px_rgba(0,0,0,0.08)]' : 'w-20 cursor-pointer'}`}
      >
        <div className="p-6 flex items-center h-20">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
            F
          </div>
          <h1 className={`text-xl font-bold font-manrope tracking-tight text-[#0f0f0f] ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`}>Familia Finance</h1>
        </div>
        <nav className="flex-1 px-3 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center p-3 rounded-2xl transition-all ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-black/5 hover:text-black'} overflow-hidden`} title={item.name}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                  <span className={`font-semibold text-sm ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-gray-100 overflow-hidden">
          <button onClick={handleLogout} className="w-full text-left">
            <div className="flex items-center px-1 py-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors" title="Sair">
              <LogOut className="w-6 h-6 flex-shrink-0" />
              <span className={`ml-4 transition-opacity duration-300 whitespace-nowrap ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`}>Sair</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0 relative">
        {/* Dynamic Welcome Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm px-6 md:px-10 py-5 flex items-center min-h-[85px]">
          <div className="w-full">
            {isLoadingHeader ? (
              <div className="animate-pulse flex flex-col gap-2">
                <div className="h-6 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-72"></div>
              </div>
            ) : headerData ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                  Bem-vindo(a) <span className="text-blue-600">{headerData.nomeUsuario}</span>
                </h2>
                <p className="text-sm text-gray-600 mt-1 font-medium">
                  Você está logado na <span className="font-bold text-gray-800">{headerData.nomeFamilia}</span>. Participantes ativos:{' '}
                  {headerData.participantes.map((part, index) => (
                    <span key={part.id}>
                      <span className={`font-bold ${textColors[part.cor] || 'text-slate-600'}`}>
                        {part.nome}
                      </span>
                      {index < headerData.participantes.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </>
            ) : null}
          </div>
        </header>

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
