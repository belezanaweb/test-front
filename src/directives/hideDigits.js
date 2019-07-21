export default {
  bind(el) {
    el.textContent = el.textContent.replace(/.(?=.{5})/g, "*")
  }
}
