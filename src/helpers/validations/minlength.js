/**
 * Validates minimum length of the input
 * @param {number} min
 */
export default function (min) {
  return {
    type: 'minlength',
    handler: text => text.trim().length >= min,
    error: `The value should have ${min} or more characters`,
  }
}
