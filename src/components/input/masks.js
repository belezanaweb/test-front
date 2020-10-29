const CARD_NUMBER = '9999.9999.9999.9999'

const CARD_DATE = '99/9999'

const CARD_CODE = '999'

const unMask = (value, regex) => value.replace(regex)

export { CARD_NUMBER, CARD_DATE, CARD_CODE, unMask }
