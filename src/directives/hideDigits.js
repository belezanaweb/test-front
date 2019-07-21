export default {
  bind(el, binding) {
    el.innerText = `${el.innerText.replace(/\d(?=\d{4})/g, "*")}`
  }
}
