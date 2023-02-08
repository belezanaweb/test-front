export const hideCreditCard = (cardNumber: string) => {
  let hideNum = [];
	for(let i = 0; i < cardNumber.length; i++){
    if (i < cardNumber.length-4) {
      if(cardNumber[i] === ' '){
        hideNum.push(".");
      } else {
        hideNum.push("*");
      }
    }else{
      hideNum.push(cardNumber[i]);
    }
  }
  return hideNum.join("");
}
