import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import api from '../../services/api'
import BoxItem from './BoxItem'


const ListProduct = ({history}) =>{
    const [list_products, setListProducts ] = useState([])


    useEffect( () => {
        if( list_products.length === 0 ){
          getListProducts()
        }
    },[list_products.length])


    const getListProducts = () =>{

      api
      .get('/products?page=1&size=10',

        { headers: { 
          'Etag':'W/"4c6d8-s2qt+3wgZdOSzJ6Yl+/9wbzdKIg"',
          "Content-Type": "application/json",
          "Accept": "application/json"  ,
          "Server": "Cowboy",
          "Via": "1.1 vegur"
      } }
      )
      .then(  async  (res) => {
          try {

            setListProducts(res.data)

            //const _listProcucts = await JSON.parse(res.data);


            console.log(res.data);

          } catch(e) {
              console.log(e)
          }
      })
      .catch(error => {
          console.error('Error getting product list :', error);
      });



    }



    const rendersLine = record => {
      return (
          <BoxItem key={record.sku}  dataProduct={record}  />
      )
    }

    return (

      <div>
          <div className="containerList" >
              {
                  list_products.map(rendersLine)
              }
          </div>
      </div>
    )

  }

  export default ListProduct;
