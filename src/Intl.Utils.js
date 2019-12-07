const intlUtils = {
  formatCurrency: (locale, currency, value) => {
    return new Intl.NumberFormat(locale, {style:'currency', currency:currency}).format(value);
  }
}

export default intlUtils;
