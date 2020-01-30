import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


const BoxItem = (props) =>{
    const [dataProduct, setDataProduct ] = useState(props.dataProduct)
    const [imgThumbnail, setImagThumbnail] = useState('')
    const [codProduct, setCodProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState(0);

    useEffect( () => {

      console.log("Props ",props.dataProduct)
      
      setCodProduct(props.dataProduct.sku)
      setPriceProduct(props.dataProduct.priceSpecification.price)
   
      if( props.dataProduct.imageObjects.length > 0){
        setImagThumbnail( props.dataProduct.imageObjects[0].small  );
      }
    },[])


    return (

          <div className="boxItem">
            <div className="row">
              <div className="column imageItemBox"  > 
                <img src={imgThumbnail} /> 
                <div className="codItemBox"> COD: {codProduct} </div>
              </div>

              <div className="column titleItemBox">
                { dataProduct.name }
              </div>

              <div className="column valueItemBox">
                R$ {priceProduct}
              </div>

              <div className="column buttonItemBox">
                
                <Link className="linkRout" title="Detalhe do produto" to={{
                                pathname: '/detailproduct',
                                sku : codProduct
                        }}>VER DETALHES</Link>


              </div>
            </div>
          </div>
  )

  }



  export default BoxItem;
