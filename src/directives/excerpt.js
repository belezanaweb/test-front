export default {
  bind(el, binding) {
    el.textContent = `${el.textContent.substring(0, binding.value)}`
  }
}
