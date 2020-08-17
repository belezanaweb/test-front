import React from 'react'
import {ButtonPay} from "./styles"


const Buttom = (props) => {
  
  return (
    
    <ButtonPay  type={props.type} href={props.path} >      
        <p>{props.title}</p>      
    </ButtonPay>
     
   
  )
}

export default Buttom
