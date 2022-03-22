let cards = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Mastercard: /^5[1-5][0-9]{14}/,
  Amex: /^3[47][0-9]{13}/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  JCB: /^(?:2131|1800|35\d{3})\d{11}/
}

function testCreditCard(nr, cards) {
  for (var card in cards) if (nr.match(cards[card])) return card
  return false
}

let valid = '4444555566667777'
let invalid = '1234567890'

;[valid, invalid].forEach(function (test) {
  console.log(testCreditCard(test, cards))
})
