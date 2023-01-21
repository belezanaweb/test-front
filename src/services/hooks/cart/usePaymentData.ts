export const usePaymentData = () => {
  const dummyData = {
    cardNumber: '****.****.****.****',
    cardName: 'Fulano de Tal',
    cardValidThrough: '70/7070'
  }

  const cachedData = localStorage.getItem("paymentData");
  const data = cachedData ? JSON.parse(cachedData) : dummyData;

  return { data };
}
