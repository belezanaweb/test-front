import axios from 'axios'

export default class Checkout {

  get(endpoint) {
    return new Promise( (resolve, reject) => {
      axios({
        url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
        method: "GET"
      })
      .then( res => resolve(res) )
      .catch( (err) => reject(err) );
    })
  }

}
