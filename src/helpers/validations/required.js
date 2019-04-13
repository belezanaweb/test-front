export default {
  type: 'required',
  handler: text => text.trim().length >= 0,
  error: `This field is required`,
}
