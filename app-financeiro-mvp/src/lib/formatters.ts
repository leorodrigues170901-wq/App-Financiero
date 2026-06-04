export function formatarVisualmente(valor: string | number): string {
  if (valor === undefined || valor === null || valor === '') return '';
  let str = String(valor);
  
  // Trocar ponto por vírgula se usuário digitar ponto
  str = str.replace('.', ',');
  
  // Limpar tudo que não for dígito ou vírgula
  str = str.replace(/[^0-9,]/g, '');

  // Garantir apenas uma vírgula
  const parts = str.split(',');
  if (parts.length > 2) {
    str = parts[0] + ',' + parts.slice(1).join('');
  }

  // Limitar a duas casas decimais
  if (parts.length === 2 && parts[1].length > 2) {
    str = parts[0] + ',' + parts[1].substring(0, 2);
  }

  // Remover zeros à esquerda (exceto "0," ou "0")
  let [inteiro, decimal] = str.split(',');
  if (inteiro && inteiro.length > 1 && inteiro.startsWith('0')) {
    inteiro = inteiro.replace(/^0+/, '');
    if (inteiro === '') inteiro = '0';
  }

  // Formatar milhares da parte inteira
  if (inteiro) {
    inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return decimal !== undefined ? `${inteiro},${decimal}` : inteiro;
}

export function limparDinheiroParaBanco(valor: string | number): number {
  if (valor === undefined || valor === null || String(valor).trim() === '') return 0;
  let str = String(valor);
  str = str.replace(/\./g, ''); // Remove todos os pontos (separadores de milhar)
  str = str.replace(',', '.'); // Troca a primeira vírgula por ponto decimal
  return parseFloat(str) || 0;
}

export function converterBancoParaInput(valor: number): string {
  if (valor === undefined || valor === null) return '';
  // Se era 35.50 no banco, converte para 35,50 e já retorna formatado visualmente
  return formatarVisualmente(String(valor).replace('.', ','));
}
