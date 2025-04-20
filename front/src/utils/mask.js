export const phoneMask = (value) => value
  .replace(/\D+/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{4})(\d)/, '$1-$2')
  .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  .replace(/(-\d{4})\d+?$/, '$1');

export const cpfMask = (value) => value
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1');

export const textMask = (value) => value
.replace(/[^a-zA-ZáàâãéèêẽíïóôõöúçñÁÀÂÃÉÈẼÍÏÓÔÕÖÚÇÑ0123456789 '-]/, '')
.slice(0, 100);

export const emailMask = (value) => value
  .replace(/\s/g, '')
  .slice(0, 100);

export const senhaMask = (value) => value
  .slice(0, 12);
