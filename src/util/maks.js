export function maskNumberCreditCard() {
  let card = document.getElementById("credit_card");
  if(card.value.length === 4 || card.value.length === 9 || card.value.length === 14){
    card.value += "."
  }
}

export function maskCardValidity() {
  let date = document.getElementById("validity_card");
  if(date.value.length === 2 ){
    date.value += "/"
  }
}
