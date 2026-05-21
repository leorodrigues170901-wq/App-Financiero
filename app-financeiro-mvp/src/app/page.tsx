import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md animate-slide-up bg-white/50 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-medium tracking-tight font-manrope text-[#0f0f0f] mb-2">
            Familia Finance
          </h1>
          <p className="text-gray-600 text-sm">Controle orçamentário transparente e unificado.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="casal@familia.com"
              className="w-full bg-white/70 border border-gray-200 rounded-2xl py-4 px-5 text-sm text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all shadow-sm"
              defaultValue="familia@finance.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/70 border border-gray-200 rounded-2xl py-4 px-5 text-sm text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all shadow-sm"
              defaultValue="123456"
            />
          </div>

          <div className="pt-4">
            <Link href="/dashboard" className="block w-full">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-gray-900 font-medium text-white bg-black rounded-full py-4 shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              >
                Entrar no Sistema
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </form>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Esqueci minha senha
          </a>
        </div>
      </div>
    </div>
  );
}
