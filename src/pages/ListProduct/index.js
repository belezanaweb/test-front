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

      var proxy = 'https://cors-anywhere.herokuapp.com/';

      api
      .get(proxy + '/products?page=1&size=10',

        { headers: { 'Content-Type': 'text/html; charset=utf-8',
          'Etag':'W/"4c6d8-s2qt+3wgZdOSzJ6Yl+/9wbzdKIg"',
          'Origin':'https://pacific-wave-51314.herokuapp.com'
      } }
      )
      .then(  async  (res) => {
          try {

            console.log(res.data);

            //const _listProcucts = await JSON.parse(res.data);


            //console.log(_listProcucts);

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
          <BoxItem key={record.id}  dadosEmp={record}  />
      )
    }

    return (

      <div>
          <div className="containerList" >


slkdjklsjdklsjdkls

              {
                  list_products.map(rendersLine)
              }
          </div>
      </div>
    )

  }

  export default ListProduct;
