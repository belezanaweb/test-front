const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium",
      image:
        'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
      price: 225.9
    },
    {
      id: 2,
      name: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
      image:
        'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
      price: 299
    },
    {
      id: 3,
      name: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
      image:
        'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
      price: 99.9
    }
  ],
  frete: 5.3,
  discount: 30
}

//Initiate the api call
const GET_CHECKOUT = 'GET_CHECKOUT'
const GET_CHECKOUT_FULLFILLED = 'GET_CHECKOUT_FULLFILLED'
const GET_CHECKOUT_REJECTED = 'GET_CHECKOUT_REJECTED'

const checkout = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHECKOUT:
      return state
  }
  return state
}

// export default function checkout(state = INITIAL_STATE, action) {
//   // axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then(res => {})
//   return state
// }

export default checkout

export const fetchData = bool => {
  return { type: GET_CHECKOUT, payload: bool }
}

export const fetchDataFullfilled = data => {
  return {
    type: GET_CHECKOUT_FULLFILLED,
    payload: data,
    loading: false
  }
}

export const fetchDataRejected = error => {
  return {
    type: GET_CHECKOUT_REJECTED,
    payload: error,
    loading: false
  }
}
