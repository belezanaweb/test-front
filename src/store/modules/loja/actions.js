export default function dadoscartao(cartao, nome, validade, cvv, done) {
  return {
    type: "DADOSCARTAO",
    payload: {
      cartao,
      nome,
      validade,
      cvv,
      done
    }
  };
}
