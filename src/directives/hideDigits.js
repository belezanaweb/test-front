export default {
  bind(el, binding) {
    el.textContent = el.innerText.replace(/\d(?=\d{4})/g, "*")
  }
}
