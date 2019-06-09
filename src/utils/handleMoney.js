export default function handleMoney(price){
  return `R$ ${parseFloat(price).toFixed(2)}`
}
