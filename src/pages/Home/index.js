

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import style from './style.module.css'
import logo from '../../logo.svg'

import ListProduct from '../ListProduct'


const Home = ({history}) =>{

  return (

    <div className="App">

      <ListProduct />

    </div>

  )

}

  export default Home;
