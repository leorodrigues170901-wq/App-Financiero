export function formatarVisualmente(valor: string | number): string {
  const digitos = String(valor).replace(/\D/g, '');
  if (!digitos) return '';
  
  // Transforma em float (considerando os últimos 2 dígitos como decimais)
  const numero = parseInt(digitos, 10) / 100;
  
  return new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(numero);
}

export function limparDinheiroParaBanco(valor: string | number): number {
  const digitos = String(valor).replace(/\D/g, '');
  if (!digitos) return 0;
  return parseInt(digitos, 10) / 100;
}

export function converterBancoParaInput(valor: number): string {
  if (valor === undefined || valor === null) return '';
  // Converte o float do banco (ex: 35.50) para a string de dígitos puros do input (ex: "3550")
  return Math.round(valor * 100).toString();
}
