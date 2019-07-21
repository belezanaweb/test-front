export default {
  bind(el, binding) {
    el.innerHtml = `${el.innerText.replace(/\d(?=\d{4})/g, "*")}`
  }
}
