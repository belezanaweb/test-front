import { useHistory } from 'react-router-dom'

export const Redirect = (url) => {
  try {
    const history = useHistory()
    history.push(url)
  } catch (error) {
    console.log(error)
  }
}
