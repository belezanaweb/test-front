export default {
  bind(el) {
    el.textContent = el.innerText.replace(/.(?=.{5})/g, "*")
  }
}
