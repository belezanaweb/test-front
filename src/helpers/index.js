export const redirect = (url, history) => {
  try {
    history.push(url)
  } catch (error) {
    console.log(error)
  }
}
