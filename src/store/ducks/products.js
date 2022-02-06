export const Types = {
  ADD_LIST_PRODUCTS: 'products/ADD_LIST_PRODUCTS',
  ADD_SPECIFICATION_TOTAL: 'products/ADD_SPECIFICATION_TOTAL'
}

const INITIAL_STATE = {
  products: [],
  specifications: {
    prodTotal: 0,
    shipping: 0,
    discont: 0,
    total: 0
  }
}

export default function ProductReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_LIST_PRODUCTS:
      return { ...state, products: action.products }
    case Types.ADD_SPECIFICATION_TOTAL:
      return { ...state, specifications: action.specifications }
    default:
      return state
  }
}

export const Creators = {
  getFieldsValidate: () => {
    let validate = false
    return {
      type: Types.GET_FIELDS_VALIDATE,
      validate
    }
  }
}
