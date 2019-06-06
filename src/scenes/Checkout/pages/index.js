import React, { Component } from 'react';

//pages
import Cart from './Cart';
import Payment from './Payment';
import Conclusion from './Conclusion';

// import { Container } from './styles';

export default class Page extends Component {
    state = {
        content: null
    }
    renderPage(page){
        switch(page){
            case "Cart":
                return(<Cart></Cart>)
            case "Payment":
                return(<Payment></Payment>)
            case "Conclusion":
                return(<Conclusion></Conclusion>)
            default:
                return(
                    <div></div>
                )
        }
    }
    
    render() {
        return(
            this.renderPage(this.props.component)
        )
    }
}
