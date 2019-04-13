export default function (max) {
  return {
    type: 'maxlength',
    handler: text => text.trim().length <= max,
    error: `The value should have ${max} or less characters`,
  }
}
