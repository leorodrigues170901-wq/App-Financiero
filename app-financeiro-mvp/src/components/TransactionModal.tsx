'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { formatarVisualmente, converterBancoParaInput } from '@/lib/formatters';
import { supabase } from '@/lib/supabase';

const categoriasAUVP = ['Essencial', 'Investimento', 'Prazer', 'Meta Planejada', 'Oportunidade', 'Conforto', 'Aumentar Renda'];

export default function TransactionModal({ isOpen, onClose, initialData, onSave, type = 'despesa' }: any) {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    status: 'Pendente',
    resp: 'Casal', // Guarda 'Casal' ou 'perfil_id'
    respNome: 'Casal', // Guarda o nome para salvar em 'responsavel' se necessário
    tipoDivisao: 'Proporcional à Renda',
    auvp: 'Essencial',
    categoria: 'Custo Fixo Assumido',
    formaPagamento: 'Conta Conjunta Itaú (PIX/Débito)',
    isParcelado: false,
    parcelaAtual: 1,
    totalParcelas: 12
  });

  const [membrosDisponiveis, setMembrosDisponiveis] = useState<any[]>([]);

  // Fetch Membros
  useEffect(() => {
    async function fetchMembros() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: membroFamily } = await supabase
        .from('membros_familia')
        .select('familia_id')
        .eq('perfil_id', user.id)
        .maybeSingle();

      const familiaId = membroFamily?.familia_id;
      let profilesData: any[] = [];

      if (familiaId) {
        const { data: membersList } = await supabase
          .from('membros_familia')
          .select('perfil_id, perfis(id, nome_usuario)')
          .eq('familia_id', familiaId);
        
        profilesData = membersList?.map((m: any) => ({
          id: m.perfis.id,
          nome_usuario: m.perfis.nome_usuario || 'Usuário',
        })) || [];
      } else {
        const { data: p } = await supabase.from('perfis').select('id, nome_usuario').eq('id', user.id).single();
        if (p) profilesData = [{ id: p.id, nome_usuario: p.nome_usuario || 'Você' }];
      }
      
      setMembrosDisponiveis(profilesData);

      // Atualiza resp/respNome no caso de não ser edição e não ter 'Casal' selecionado
      if (!initialData && type === 'receita' && profilesData.length > 0) {
        // Se receita, por padrão pega o próprio usuário ou o primeiro da lista
        const defaultMember = profilesData.find(m => m.id === user.id) || profilesData[0];
        setFormData(prev => ({
          ...prev,
          resp: defaultMember.id,
          respNome: defaultMember.nome_usuario
        }));
      }
    }

    if (isOpen) {
      fetchMembros();
    }
  }, [isOpen, type, initialData]);

  useEffect(() => {
    if (initialData) {
      // initialData.resp geralmente tem o nome ("Leo") ou ID dependendo do histórico.
      // Com essa refatoração, garantimos que resp receba o ID quando for membro, e 'Casal' quando for 'Casal'
      // Como dados antigos podem ter "Leo", deixamos o fallback
      const oldRespName = initialData.responsavel || initialData.resp;
      let foundId = oldRespName; // default (pode ser UUID se já migrado)
      let foundName = oldRespName;

      // Tenta achar na lista de membros se não for Casal
      if (oldRespName !== 'Casal' && membrosDisponiveis.length > 0) {
        const member = membrosDisponiveis.find(m => m.id === oldRespName || m.nome_usuario === oldRespName);
        if (member) {
          foundId = member.id;
          foundName = member.nome_usuario;
        }
      }

      setFormData({
        descricao: initialData.descricao || '',
        valor: initialData.valor !== undefined ? converterBancoParaInput(initialData.valor) : '',
        status: initialData.status || (type === 'receita' ? 'Recebido' : 'Pendente'),
        resp: foundId || (type === 'receita' ? '' : 'Casal'),
        respNome: foundName || (type === 'receita' ? '' : 'Casal'),
        tipoDivisao: initialData.tipoDivisao || initialData.tipo_divisao || 'Proporcional à Renda',
        auvp: initialData.auvp || 'Essencial',
        categoria: initialData.categoria || (type === 'receita' ? 'Entrada' : 'Custo Fixo Assumido'),
        formaPagamento: initialData.formaPagamento || initialData.forma_pagamento || 'Conta Conjunta Itaú (PIX/Débito)',
        isParcelado: initialData.isParcelado || initialData.is_parcelado || false,
        parcelaAtual: initialData.parcelaAtual || initialData.parcela_atual || 1,
        totalParcelas: initialData.totalParcelas || initialData.total_parcelas || 12
      });
    } else {
      // Já inicializamos no state e no fetchMembros, aqui só reset do valor
      setFormData(prev => ({
        ...prev,
        descricao: '',
        valor: '',
        status: type === 'receita' ? 'Recebido' : 'Pendente',
        // resp/respNome são setados no fetchMembros
        tipoDivisao: 'Proporcional à Renda',
        auvp: 'Essencial',
        categoria: type === 'receita' ? '' : 'Custo Fixo Assumido',
        formaPagamento: 'Conta Conjunta Itaú (PIX/Débito)',
        isParcelado: false,
        parcelaAtual: 1,
        totalParcelas: 12
      }));
    }
  }, [initialData, isOpen, type, membrosDisponiveis]);

  if (!isOpen) return null;

  const isEditing = !!initialData;
  const isReceita = type === 'receita';
  
  const title = isEditing 
    ? (isReceita ? 'Editar Receita' : 'Editar Despesa') 
    : (isReceita ? 'Nova Receita' : 'Nova Despesa');
    
  const buttonText = isEditing 
    ? 'Salvar Alterações' 
    : (isReceita ? 'Criar Receita' : 'Criar Despesa');

  const handleRespChange = (e: any) => {
    const val = e.target.value;
    if (val === 'Casal') {
      setFormData({...formData, resp: 'Casal', respNome: 'Casal'});
    } else {
      const selected = membrosDisponiveis.find(m => m.id === val);
      setFormData({
        ...formData, 
        resp: val, 
        respNome: selected ? selected.nome_usuario : val
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Descrição</label>
              <input 
                type="text" 
                value={formData.descricao}
                onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                placeholder={isReceita ? "Ex: Salário, Projeto..." : "Ex: Aluguel, Mercado..."} 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor (R$)</label>
              <input 
                type="text" 
                value={formatarVisualmente(formData.valor)}
                onChange={(e) => setFormData({...formData, valor: e.target.value.replace(/\D/g, '')})}
                placeholder="0,00" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                {isReceita ? (
                  <>
                    <option value="Recebido">Recebido</option>
                    <option value="Pendente">Pendente</option>
                  </>
                ) : (
                  <>
                    <option value="Pendente">Pendente</option>
                    <option value="Pago">Pago</option>
                    <option value="Direcionado">Direcionado</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Responsável</label>
              <select 
                value={formData.resp}
                onChange={handleRespChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                {!isReceita && <option value="Casal">Casal</option>}
                {membrosDisponiveis.map(m => (
                  <option key={m.id} value={m.id}>{m.nome_usuario}</option>
                ))}
              </select>
            </div>
            
            {/* Lógica Condicional: Exibir "Tipo de Divisão" apenas se o responsável for "Casal" */}
            {!isReceita && formData.resp === 'Casal' ? (
              <div className="space-y-1.5 animate-fade-in">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Tipo de Divisão</label>
                <select 
                  value={formData.tipoDivisao}
                  onChange={(e) => setFormData({...formData, tipoDivisao: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="Proporcional à Renda">Proporcional à Renda</option>
                  <option value="50/50">50/50</option>
                </select>
              </div>
            ) : (
              <div className="hidden md:block"></div>
            )}
            
            {!isReceita && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Classificação AUVP</label>
                  <select 
                    value={formData.auvp}
                    onChange={(e) => setFormData({...formData, auvp: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {categoriasAUVP.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Categoria do Gasto</label>
                  <select 
                    value={formData.categoria}
                    onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="Custo Fixo Assumido">Custo Fixo Assumido</option>
                    <option value="Recorrente Cancelável">Recorrente Cancelável</option>
                    <option value="Variável">Variável</option>
                  </select>
                </div>
              </>
            )}
            
            {isReceita && (
              <div className="space-y-1.5 animate-fade-in">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Categoria</label>
                <input 
                  type="text" 
                  value={formData.categoria}
                  onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                  placeholder="Ex: Salário, Rendimentos, Outros..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            )}
          </div>

          {!isReceita && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Forma de Pagamento</label>
                <select 
                  value={formData.formaPagamento}
                  onChange={(e) => setFormData({...formData, formaPagamento: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="Conta Conjunta Itaú (PIX/Débito)">Conta Conjunta Itaú (PIX/Débito)</option>
                  <option value="Fatura Cartão de Crédito">Fatura Cartão de Crédito</option>
                  <option value="Caixinha/Reserva Separada">Caixinha/Reserva Separada</option>
                </select>
              </div>
            </div>
          )}

          {!isReceita && (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3 mt-2">
              <label className="flex items-center gap-3 cursor-pointer group w-max">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md bg-white checked:bg-black checked:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 transition-all"
                    checked={formData.isParcelado}
                    onChange={(e) => setFormData({...formData, isParcelado: e.target.checked})}
                  />
                  <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-black transition-colors">Compra Parcelada?</span>
              </label>

              {formData.isParcelado && (
                <div className="flex items-center gap-3 pt-3 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      value={formData.parcelaAtual}
                      onChange={(e) => setFormData({...formData, parcelaAtual: parseInt(e.target.value) || 1})}
                      className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm text-center text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-mono" 
                      min="1" 
                    />
                    <span className="text-gray-500 font-semibold text-sm">de</span>
                    <input 
                      type="number" 
                      value={formData.totalParcelas}
                      onChange={(e) => setFormData({...formData, totalParcelas: parseInt(e.target.value) || 2})}
                      className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm text-center text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-mono" 
                      min="2" 
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">parcelas</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-black hover:bg-gray-200 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={() => {
              if (onSave) onSave(formData);
              onClose();
            }}
            className="px-6 py-2.5 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-xl shadow-md transition-all active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
