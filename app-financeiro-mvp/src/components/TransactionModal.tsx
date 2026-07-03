'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { formatarVisualmente, converterBancoParaInput, limparDinheiroParaBanco } from '@/lib/formatters';
import { supabase } from '@/lib/supabase';
import { useMonth } from '@/contexts/MonthContext';

const categoriasAUVP = ['Essencial', 'Investimento', 'Prazer', 'Meta Planejada', 'Oportunidade', 'Conforto', 'Aumentar Renda'];
const CATEGORIAS_GASTOS = ['Custo Fixo Assumido', 'Custo Recorrente Cancelável', 'Custo Recorrente Planejado', 'Custo Variável'];
const FORMAS_PAGAMENTO = ['Pix', 'Cartão de Crédito', 'Caixinha Reserva'];
const TIPOS_DIVISAO = ['Igualitária', 'Proporcional à Renda', 'Personalizada'];

export default function TransactionModal({ isOpen, onClose, initialData, onSave, type = 'despesa' }: any) {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    status: 'Pendente',
    resp: 'Todos', // Guarda 'Todos' ou 'perfil_id'
    respNome: 'Todos', // Guarda o nome para salvar em 'responsavel' se necessário
    tipoDivisao: 'Igualitária',
    auvp: 'Essencial',
    categoria: 'Custo Fixo Assumido',
    formaPagamento: 'Pix',
    isParcelado: false,
    parcelaAtual: 1,
    totalParcelas: 12
  });

  const [membrosDisponiveis, setMembrosDisponiveis] = useState<any[]>([]);
  const [percentuaisPersonalizados, setPercentuaisPersonalizados] = useState<Record<string, number>>({});
  
  const { currentDate } = useMonth();
  const [saldosMembros, setSaldosMembros] = useState<Record<string, {receitaTotal: number, despesaTotal: number, saldoDisponivel: number}>>({});
  const [errorMsg, setErrorMsg] = useState<React.ReactNode | string | null>(null);

  // Fetch Membros
  useEffect(() => {
    async function fetchMembros() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: userFam } = await supabase
        .from('membros_familia')
        .select('familia_id')
        .eq('perfil_id', user.id)
        .maybeSingle();

      let profilesData: any[] = [];

      if (userFam?.familia_id) {
        const { data: membrosFam } = await supabase
          .from('membros_familia')
          .select('perfil_id')
          .eq('familia_id', userFam.familia_id)
          .in('status', ['host', 'ativo']);
          
        if (membrosFam && membrosFam.length > 0) {
          const ids = membrosFam.map(m => m.perfil_id);
          const { data: perfis } = await supabase
            .from('perfis')
            .select('id, nome_usuario, cor_perfil')
            .in('id', ids);
            
          profilesData = perfis?.map((p: any) => ({
            id: p.id,
            nome_usuario: p.nome_usuario || 'Usuário',
            cor_perfil: p.cor_perfil || 'blue'
          })) || [];
        }
      } else {
        const { data: perfis } = await supabase
          .from('perfis')
          .select('id, nome_usuario, cor_perfil')
          .eq('id', user.id);
          
        profilesData = perfis?.map((p: any) => ({
          id: p.id,
          nome_usuario: p.nome_usuario || 'Você',
          cor_perfil: p.cor_perfil || 'blue'
        })) || [];
      }
      
      setMembrosDisponiveis(profilesData);

      // Atualiza resp/respNome no caso de não ser edição e não ter 'Todos' selecionado
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

  // Fetch Saldos
  useEffect(() => {
    async function fetchSaldos() {
      if (type === 'receita' || !currentDate || membrosDisponiveis.length === 0) return;

      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59).toISOString();

      const memberIds = membrosDisponiveis.map(m => m.id);

      const [{ data: receitasData }, { data: despesasData }] = await Promise.all([
        supabase.from('receitas').select('perfil_id, valor').in('perfil_id', memberIds).gte('data', startOfMonth).lte('data', endOfMonth),
        supabase.from('despesas').select('perfil_id, valor, responsaveis_divisao, id').gte('data', startOfMonth).lte('data', endOfMonth)
      ]);

      const newSaldos: Record<string, {receitaTotal: number, despesaTotal: number, saldoDisponivel: number}> = {};
      membrosDisponiveis.forEach(m => {
        newSaldos[m.id] = { receitaTotal: 0, despesaTotal: 0, saldoDisponivel: 0 };
      });

      if (receitasData) {
        receitasData.forEach(r => {
          if (newSaldos[r.perfil_id]) {
            newSaldos[r.perfil_id].receitaTotal += Number(r.valor);
          }
        });
      }

      if (despesasData) {
        despesasData.forEach(d => {
          // Ignorar a despesa atual se estivermos editando
          if (initialData && d.id === initialData.id) return;

          if (d.responsaveis_divisao && Array.isArray(d.responsaveis_divisao)) {
            d.responsaveis_divisao.forEach((div: any) => {
              if (newSaldos[div.id]) {
                newSaldos[div.id].despesaTotal += Number(div.valor);
              }
            });
          } else if (newSaldos[d.perfil_id]) {
            newSaldos[d.perfil_id].despesaTotal += Number(d.valor);
          }
        });
      }

      Object.keys(newSaldos).forEach(id => {
        newSaldos[id].saldoDisponivel = newSaldos[id].receitaTotal - newSaldos[id].despesaTotal;
      });

      setSaldosMembros(newSaldos);
    }

    if (isOpen) {
      fetchSaldos();
    }
  }, [isOpen, currentDate, membrosDisponiveis, type, initialData]);

  const resetFormStates = () => {
    setFormData(prev => ({
      ...prev,
      descricao: '',
      valor: '',
      status: type === 'receita' ? 'Recebido' : 'Pendente',
      tipoDivisao: 'Igualitária',
      auvp: 'Essencial',
      categoria: type === 'receita' ? '' : 'Custo Fixo Assumido',
      formaPagamento: 'Pix',
      isParcelado: false,
      parcelaAtual: 1,
      totalParcelas: 12
    }));
    setPercentuaisPersonalizados({});
    setErrorMsg(null);
  };

  const handleClose = () => {
    resetFormStates();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      resetFormStates();
      return;
    }

    if (initialData) {
      let respId = initialData.perfil_id || initialData.responsavel || initialData.resp || 'Todos';
      let respNome = initialData.respNome || 'Todos';
      let tipoDivisao = initialData.tipoDivisao || initialData.tipo_divisao || 'Igualitária';
      let newPercentuais: Record<string, number> = {};

      if (respId === 'Casal') respId = 'Todos';

      if (!isReceita && initialData.responsaveis_divisao && Array.isArray(initialData.responsaveis_divisao)) {
        if (initialData.responsaveis_divisao.length === 1) {
          respId = initialData.responsaveis_divisao[0].id;
        } else if (initialData.responsaveis_divisao.length > 1) {
          respId = 'Todos';
          if (tipoDivisao === 'Personalizada') {
             initialData.responsaveis_divisao.forEach((div: any) => {
               newPercentuais[div.id] = div.percentual || 0;
             });
          }
        }
      }

      if (respId !== 'Todos' && membrosDisponiveis.length > 0) {
        const member = membrosDisponiveis.find(m => m.id === respId || m.nome_usuario === respId);
        if (member) {
          respId = member.id;
          respNome = member.nome_usuario;
        }
      }

      setFormData({
        descricao: initialData.descricao || '',
        valor: initialData.valor !== undefined ? converterBancoParaInput(initialData.valor) : '',
        status: initialData.status || (type === 'receita' ? 'Recebido' : 'Pendente'),
        resp: respId,
        respNome: respNome,
        tipoDivisao: tipoDivisao,
        auvp: initialData.classificacao_auvp || initialData.auvp || 'Essencial',
        categoria: initialData.categoria_gastos || initialData.categoria || (type === 'receita' ? 'Entrada' : 'Custo Fixo Assumido'),
        formaPagamento: initialData.forma_pagamento || initialData.formaPagamento || 'Pix',
        isParcelado: initialData.parcelado || initialData.isParcelado || initialData.is_parcelado || false,
        parcelaAtual: initialData.parcela_atual || initialData.parcelaAtual || 1,
        totalParcelas: initialData.total_parcelas || initialData.totalParcelas || 1
      });
      setPercentuaisPersonalizados(newPercentuais);
    } else {
      resetFormStates();
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
    if (val === 'Todos') {
      setFormData({...formData, resp: 'Todos', respNome: 'Todos'});
    } else {
      const selected = membrosDisponiveis.find(m => m.id === val);
      setFormData({
        ...formData, 
        resp: val, 
        respNome: selected ? selected.nome_usuario : val
      });
    }
  };

  const calcularRateio = (valorTotalNum: number) => {
    let rateio: { id: string, nome: string, percentual: number, valor: number }[] = [];

    if (formData.resp !== 'Todos') {
      const membro = membrosDisponiveis.find(m => m.id === formData.resp);
      if (membro) {
        rateio.push({
          id: membro.id,
          nome: membro.nome_usuario,
          percentual: 100,
          valor: valorTotalNum
        });
      }
    } else {
      if (formData.tipoDivisao === 'Igualitária' || formData.tipoDivisao === '50/50') {
        const numMembros = membrosDisponiveis.length;
        const percentual = 100 / numMembros;
        const valorPorMembro = valorTotalNum / numMembros;
        membrosDisponiveis.forEach(m => {
          rateio.push({
            id: m.id,
            nome: m.nome_usuario,
            percentual: Number(percentual.toFixed(2)),
            valor: Number(valorPorMembro.toFixed(2))
          });
        });
      } else if (formData.tipoDivisao === 'Proporcional à Renda') {
        let somaReceitas = 0;
        membrosDisponiveis.forEach(m => {
          somaReceitas += (saldosMembros[m.id]?.receitaTotal || 0);
        });

        membrosDisponiveis.forEach(m => {
          let percentual = 0;
          if (somaReceitas === 0) {
            percentual = 100 / membrosDisponiveis.length;
          } else {
            const receitaMembro = saldosMembros[m.id]?.receitaTotal || 0;
            percentual = (receitaMembro / somaReceitas) * 100;
          }
          const valor = (percentual / 100) * valorTotalNum;
          rateio.push({
            id: m.id,
            nome: m.nome_usuario,
            percentual: Number(percentual.toFixed(2)),
            valor: Number(valor.toFixed(2))
          });
        });
      } else if (formData.tipoDivisao === 'Personalizada') {
        membrosDisponiveis.forEach(m => {
          const perc = percentuaisPersonalizados[m.id] || 0;
          const valor = (perc / 100) * valorTotalNum;
          rateio.push({
            id: m.id,
            nome: m.nome_usuario,
            percentual: perc,
            valor: Number(valor.toFixed(2))
          });
        });
      }
    }
    
    if (rateio.length > 0) {
      const somaValores = rateio.reduce((acc, curr) => acc + curr.valor, 0);
      const diff = valorTotalNum - somaValores;
      if (Math.abs(diff) > 0.001) {
        rateio[0].valor = Number((rateio[0].valor + diff).toFixed(2));
      }
    }

    return rateio;
  };

  const handleSaveClick = () => {
    setErrorMsg(null);
    const valorString = String(formData.valor);
    const valorNumerico = Number(valorString.replace(/\./g, "").replace(",", "."));
    
    const formatCurrency = (val: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

    if (valorNumerico <= 0) {
      setErrorMsg('O valor deve ser maior que zero.');
      return;
    }

    if (!isReceita) {
      if (formData.resp === 'Todos' && formData.tipoDivisao === 'Personalizada') {
        let soma = 0;
        membrosDisponiveis.forEach(m => {
          soma += (percentuaisPersonalizados[m.id] || 0);
        });
        if (Math.abs(soma - 100) > 0.01) {
          setErrorMsg('A soma das porcentagens deve ser exatamente 100%.');
          return;
        }
      }

      const rateioArray = calcularRateio(valorNumerico);

      // HARD BLOCK
      const membrosSemSaldo: any[] = [];
      for (const fatia of rateioArray) {
        const saldoDisp = saldosMembros[fatia.id]?.saldoDisponivel || 0;
        if (fatia.valor > saldoDisp) {
           const membroDetalhe = membrosDisponiveis.find(m => m.id === fatia.id);
           membrosSemSaldo.push({
             id: fatia.id,
             nome: fatia.nome,
             cor: membroDetalhe?.cor_perfil || 'red',
             deficit: fatia.valor - saldoDisp
           });
        }
      }

      if (membrosSemSaldo.length > 0) {
        setErrorMsg(
          <div className="flex flex-col gap-1">
            <span className="font-bold text-red-600">Bloqueio Rígido: Saldo insuficiente.</span>
            <span className="text-sm text-red-500 mb-2">Para salvar esta despesa, é necessário cadastrar novas receitas para cobrir os valores faltantes:</span>
            <ul className="list-disc pl-5 text-sm">
              {membrosSemSaldo.map(m => (
                <li key={m.id} className="text-red-500">
                  <span className={`font-bold text-${m.cor}-500`}>{m.nome}</span> precisa de mais <span className="font-bold">{formatCurrency(m.deficit)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
        return;
      }

      const payloadDespesa = {
        descricao: formData.descricao,
        valor: formData.valor,
        status: formData.status,
        classificacao_auvp: formData.auvp,
        categoria_gastos: formData.categoria,
        forma_pagamento: formData.formaPagamento,
        tipo_divisao: formData.tipoDivisao,
        responsaveis_divisao: rateioArray,
        parcelado: formData.isParcelado,
        parcela_atual: formData.parcelaAtual,
        total_parcelas: formData.totalParcelas,
        resp: formData.resp
      };

      if (onSave) onSave(payloadDespesa);
      handleClose();
    } else {
      if (onSave) onSave({...formData});
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>
      
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSaveClick(); }}
        className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <button 
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-semibold animate-fade-in">
            {errorMsg}
          </div>
        )}

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

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor (R$)</label>
              <input 
                type="text" 
                value={formData.valor}
                onChange={(e) => {
                  let val = e.target.value;
                  // 1. Se o usuário digitar um ponto para decimais (no fim da string ou antes de até 2 dígitos), converte para vírgula
                  val = val.replace(/\.(?=\d{0,2}$)/, ',');
                  // 2. Remove todos os pontos de formatação visual antigos
                  val = val.replace(/\./g, '');
                  // 3. Remove tudo que não for dígito numérico ou vírgula
                  val = val.replace(/[^\d,]/g, '');
                  
                  // 4. Garante apenas uma vírgula na string
                  const parts = val.split(',');
                  if (parts.length > 2) val = parts[0] + ',' + parts.slice(1).join('');
                  
                  let [integerPart, decimalPart] = val.split(',');
                  
                  // 5. Formata a parte inteira (milhares)
                  if (integerPart) {
                    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                  }
                  
                  // 6. Limita a parte decimal a 2 dígitos
                  if (decimalPart !== undefined) decimalPart = decimalPart.substring(0, 2);
                  
                  const finalString = decimalPart !== undefined ? integerPart + ',' + decimalPart : integerPart;
                  setFormData({...formData, valor: finalString});
                }}
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
                    <option value="Realizado">Realizado</option>
                  </>
                )}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Responsável</label>
              <select 
                value={formData.resp}
                onChange={handleRespChange}
                disabled={membrosDisponiveis.length === 1}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                {!isReceita && <option value="Todos">Todos</option>}
                {membrosDisponiveis.map(m => (
                  <option key={m.id} value={m.id}>{m.nome_usuario}</option>
                ))}
              </select>
            </div>
            
            {/* Lógica Condicional: Exibir "Tipo de Divisão" apenas se o responsável for "Todos" */}
            {!isReceita && formData.resp === 'Todos' ? (
              <div className="space-y-1.5 animate-fade-in">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Tipo de Divisão</label>
                <select 
                  value={formData.tipoDivisao}
                  onChange={(e) => setFormData({...formData, tipoDivisao: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  {TIPOS_DIVISAO.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="hidden md:block"></div>
            )}
            
            {/* Divisão Personalizada */}
            {!isReceita && formData.resp === 'Todos' && formData.tipoDivisao === 'Personalizada' && (
              <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-4 animate-fade-in space-y-3 mt-1">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block">Porcentagem por Membro (%)</label>
                <div className="grid grid-cols-2 gap-4">
                  {membrosDisponiveis.map(m => (
                    <div key={m.id} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-sm font-medium text-gray-700 flex-1 truncate">{m.nome_usuario}</span>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number"
                          value={percentuaisPersonalizados[m.id] || ''}
                          onChange={(e) => setPercentuaisPersonalizados({...percentuaisPersonalizados, [m.id]: Number(e.target.value)})}
                          onFocus={(e) => e.target.select()}
                          placeholder="0"
                          className="w-16 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition-all font-mono"
                        />
                        <span className="text-gray-500 font-semibold text-sm">%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                    {CATEGORIAS_GASTOS.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Forma de Pagamento</label>
                  <select 
                    value={formData.formaPagamento}
                    onChange={(e) => setFormData({...formData, formaPagamento: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {FORMAS_PAGAMENTO.map(forma => (
                      <option key={forma} value={forma}>{forma}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            
          </div>

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
                      onFocus={(e) => e.target.select()}
                      className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-2 text-sm text-center text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-mono" 
                      min="1" 
                    />
                    <span className="text-gray-500 font-semibold text-sm">de</span>
                    <input 
                      type="number" 
                      value={formData.totalParcelas}
                      onChange={(e) => setFormData({...formData, totalParcelas: parseInt(e.target.value) || 2})}
                      onFocus={(e) => e.target.select()}
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
            type="button"
            onClick={handleClose}
            className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-black hover:bg-gray-200 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="px-6 py-2.5 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-xl shadow-md transition-all active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
