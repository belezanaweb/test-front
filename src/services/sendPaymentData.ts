import { maskCardNumber } from '../utils'

export default async function sendPaymentData(form: CardForm) {
  //For this example I thought of using localStorage because it's simpler
  //In a real world site using localstorage is a bad security practice.
  //IMHO there's no secure way to store payment data in the frontend
  //in a second moment I thought about encoding the data and sending it
  //via router state
  // window.localStorage.setItem('unsecure__paymentData', form.toString())

  return {
    cardNumber: maskCardNumber(form.cardNumber),
    cardOwner: form.cardOwner,
    cardExpirationDate: form.cardExpirationDate
  }
}
