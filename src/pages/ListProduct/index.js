import React, { useState, useEffect } from 'react';
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
      .get('/products?page=1&size=10'
      )
      .then(  async  (res) => {
          try {
            setListProducts(res.data)
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
