const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://avthptkqqqgheseiwfmo.supabase.co';
const supabaseAnonKey = 'sb_publishable_LKOq6ykVu17GTYWYfEhwsw_bQTq7IUE';
const legacyKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2dGhwdGtxcXFnaGVzZWl3Zm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTMxNjIsImV4cCI6MjA5NDc2OTE2Mn0.mvmwoG-pdEKNO4zSXm1UgPCm5wBGHXboLTUFCtUwpOE';

const supabase1 = createClient(supabaseUrl, supabaseAnonKey);
const supabase2 = createClient(supabaseUrl, legacyKey);

async function test() {
  try {
    const res1 = await supabase1.from('receitas').select('*').limit(1);
    console.log('Result with publishable key:', res1.error ? res1.error.message : 'Success');
  } catch (e) {
    console.error('Error with publishable key:', e.message);
  }

  try {
    const res2 = await supabase2.from('receitas').select('*').limit(1);
    console.log('Result with legacy key:', res2.error ? res2.error.message : 'Success');
  } catch (e) {
    console.error('Error with legacy key:', e.message);
  }
}

test();
