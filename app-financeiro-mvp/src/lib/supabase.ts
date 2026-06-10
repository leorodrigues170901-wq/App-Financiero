import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("🚨 ALERTA CRÍTICO: As variáveis de ambiente do Supabase estão ausentes. Verifique o .env.local");
}

// Cria a instância do Supabase apenas uma vez.
export const supabase = createClient(
  supabaseUrl || 'https://ERRO-ENV-NAO-CARREGADO.supabase.co',
  supabaseAnonKey || 'ERRO',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    }
  }
);
