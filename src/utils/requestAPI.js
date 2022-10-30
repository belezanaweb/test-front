import axios from 'axios'

const requestAPI = async ({ url, headers, params }) => {
  let res = undefined

  try {
    res = await axios.get(url, {
      headers,
      params
    })
  } catch (err) {
    console.log(err)
  }

  return res
}

export default requestAPI
