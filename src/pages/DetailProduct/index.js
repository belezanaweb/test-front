import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'


const DetailProduct = (props) =>{
    const [list_products, setListProducts ] = useState([])
    const [dataProduct, setDataProcuct] = useState(null)
    const [sku, setSku] = useState('');
    const [imgThumbnail, setImagThumbnail] = useState('')

    useEffect( () => {
      async function setSkuInit(){
        await setSku(props.location.sku);

        if( parseInt(props.location.sku) > 0){
          getDetailProduct( props.location.sku )
        }
      }
      setSkuInit();
    },[])


    const getDetailProduct = ( _sku) =>{


      console.log(_sku)

      api
      .get('/products/' + _sku)
      .then(  async  (res) => {
          try {

            setDataProcuct(res.data)
            if( res.data.imageObjects.length > 0){
              setImagThumbnail( res.data.imageObjects[0].medium  );
            }
    

            console.log(res.data);

          } catch(e) {
              console.log(e)
          }
      })
      .catch(error => {
          console.error('Error getting product list :', error);
      });

    }

    if(!dataProduct){
      return(<></>)
    }

    return (
      <div key={dataProduct}>
          <div className="containerList" >





            <div className="boxDetailProduct">

              <div className="row titleDetailProduct">
                    DETALHES DO PRODUTO
              </div>


              <div className="row textDetailProduct">
                {dataProduct.details.shortDescription}
              </div>

              <div className="row divImageDetail"  > 
                  <img src={imgThumbnail} /> 
                  
              </div>



              <div className="row valueDetailOld">
                  R$ {dataProduct.priceSpecification.originalPrice}
              </div>

              <div className="row valueDetail">
                  R$ {dataProduct.priceSpecification.price}
              </div>






              <div className="row ">
                <div className="column valueParcel">
                { dataProduct.priceSpecification.installments.numberOfPayments   } X de R$ {dataProduct.priceSpecification.installments.monthlyPayment}
                </div>

                <div className="column codItemBox"> COD: {sku} </div>
              </div>

              <div className="row divRow">
                <div className="buttonDetail divRow">
                    <Link className="linkRout" title="Comprar" to={{
                                    pathname: '/',
                                    sku : sku
                            }}>COMPRE</Link>
                </div>

              </div>


              <div className="row titleDetailProduct">
                    Descrição do Produto
              </div>

              <div className="row descriptionProduct">
                {dataProduct.details.description}
              </div>

            </div>





          </div>
      </div>
    )

  }

  export default DetailProduct;
