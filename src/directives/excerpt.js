export default {
  bind(el, binding) {
    el.innerText = `${el.innerText.substring(0, binding.value)}`
  }
}
