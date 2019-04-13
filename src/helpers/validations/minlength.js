export default function (min) {
  return {
    type: 'minlength',
    handler: text => text.trim().length >= min,
    error: `The value should have ${min} or more characters`,
  }
}
