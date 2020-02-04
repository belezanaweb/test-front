const initialState = {
  Produtos: [],
  Informacao: [],
  cartao: "",
  nome: "",
  validade: "",
  cvv: "",
  done: 0
};

export default function loja(state = [], action) {
  if (state.length == 0) {
    return initialState;
  }
  if (action.type == "BUSCARPRODUTOS") {
    return {
      ...state,
      Produtos: action.Produtos,
      Informacao: action.Informacao
    };
  }
  if (action.type == "DADOSCARTAO") {
    return {
      ...state,
      cartao: action.cartao,
      nome: action.nome,
      validade: action.validade,
      cvv: action.cvv,
      done: action.done
    };
  }

  return state;
}
