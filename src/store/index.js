import { createStore } from 'redux'
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

function reducer(state = INITIAL_STATE, action) {
  console.log(action)
  return state
}

const store = createStore(reducer)

export default store
