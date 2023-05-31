export function cardHide(card: string) {
  let hideNum = [];
	for(let i = 0; i < card.length; i++){
    if(i < card.length-4){
      hideNum.push("*");
    }else{
      hideNum.push(card[i]);
    }
  }
  return hideNum.join("");
}
