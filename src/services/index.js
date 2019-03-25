export async function getData() {
  try {
    const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/javascript'
      }
    })
    const json = await response.json()

    return json
  } catch (err) {
    console.log('Error problem', err)
  }
}
