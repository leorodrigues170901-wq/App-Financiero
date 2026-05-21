'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('individual'); // 'individual', 'new_family', 'join_family'
  const [familyName, setFamilyName] = useState('');
  const [hostEmail, setHostEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!isLogin && password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    
    setIsLoading(true);

    try {
      if (isLogin) {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (authError) {
          setError('E-mail ou senha incorretos. Tente novamente.');
          setIsLoading(false);
          return;
        }

        if (data.session) {
          router.push('/dashboard');
        }
      } else {
        // Simular a criação da conta
        setTimeout(() => {
          setIsLoading(false);
          setIsLogin(true); // Retorna para a tela de login após criar
        }, 1500);
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Verifique sua conexão.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden my-auto">
        {/* Efeito decorativo sutil no topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="text-center mb-8 mt-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mx-auto mb-5 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <span className="text-2xl font-bold text-white tracking-tighter">F</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Familia Finance</h1>
          <p className="text-zinc-400 text-sm">
            {isLogin ? 'Bem-vindo de volta, acesse sua conta.' : 'Crie sua conta e comece agora.'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  required={!isLogin}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 ml-1">Nome de Usuário (Como quer ser chamado?)</label>
                <input 
                  type="text" 
                  placeholder="Ex: Leo" 
                  value={nomeUsuario}
                  onChange={(e) => setNomeUsuario(e.target.value)}
                  required={!isLogin}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
            </>
          )}

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-zinc-300 ml-1">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-zinc-300">Senha</label>
              {isLogin && (
                <Link href="#" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                  Esqueci minha senha
                </Link>
              )}
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>

          {!isLogin && (
            <>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 ml-1">Confirmar Senha</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={!isLogin}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Tipo de Conta</label>
                <div className="grid grid-cols-1 gap-2">
                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${accountType === 'individual' ? 'bg-blue-500/10 border-blue-500/50' : 'bg-zinc-950/50 border-zinc-800 hover:border-zinc-700'}`}>
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="individual"
                      checked={accountType === 'individual'}
                      onChange={() => setAccountType('individual')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${accountType === 'individual' ? 'border-blue-500' : 'border-zinc-600'}`}>
                      {accountType === 'individual' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                    </div>
                    <span className={`text-sm font-medium ${accountType === 'individual' ? 'text-blue-400' : 'text-zinc-400'}`}>Individual</span>
                  </label>

                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${accountType === 'new_family' ? 'bg-blue-500/10 border-blue-500/50' : 'bg-zinc-950/50 border-zinc-800 hover:border-zinc-700'}`}>
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="new_family"
                      checked={accountType === 'new_family'}
                      onChange={() => setAccountType('new_family')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${accountType === 'new_family' ? 'border-blue-500' : 'border-zinc-600'}`}>
                      {accountType === 'new_family' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                    </div>
                    <span className={`text-sm font-medium ${accountType === 'new_family' ? 'text-blue-400' : 'text-zinc-400'}`}>Criar Nova Família</span>
                  </label>

                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${accountType === 'join_family' ? 'bg-blue-500/10 border-blue-500/50' : 'bg-zinc-950/50 border-zinc-800 hover:border-zinc-700'}`}>
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="join_family"
                      checked={accountType === 'join_family'}
                      onChange={() => setAccountType('join_family')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${accountType === 'join_family' ? 'border-blue-500' : 'border-zinc-600'}`}>
                      {accountType === 'join_family' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                    </div>
                    <span className={`text-sm font-medium ${accountType === 'join_family' ? 'text-blue-400' : 'text-zinc-400'}`}>Entrar em uma Família</span>
                  </label>
                </div>
              </div>

              {accountType === 'new_family' && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-sm font-medium text-zinc-300 ml-1">Nome da Família</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Família Alves" 
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    required={accountType === 'new_family'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
              )}

              {accountType === 'join_family' && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-sm font-medium text-zinc-300 ml-1">E-mail do Host</label>
                  <input 
                    type="email" 
                    placeholder="host@familia.com" 
                    value={hostEmail}
                    onChange={(e) => setHostEmail(e.target.value)}
                    required={accountType === 'join_family'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
              )}
            </>
          )}

          {error && (
            <p className="text-red-400 text-sm text-center font-medium mt-2">
              {error}
            </p>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg shadow-white/5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (isLogin ? 'Entrando...' : 'Criando conta...') : (isLogin ? 'Entrar' : 'Criar Conta')}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-400">
            {isLogin ? 'Ainda não tem uma conta? ' : 'Já possui uma conta? '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              type="button"
              className="text-white hover:text-blue-400 hover:underline font-medium transition-colors"
            >
              {isLogin ? 'Criar nova conta' : 'Fazer login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
