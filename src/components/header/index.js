import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../router/index";
import { push } from "connected-react-router";

import { MainWrapper } from "./style"

class Header extends Component {
    
    convertStringToNumber = (page) => {
        switch(page) {
            case "cart": {
                return 1
            }

            case "payment": {
                return 2
            }

            case "success": {
                return 3
            }
    
            default:
                return (console.error("Page not found"))
        }
    }

  render() {
    return (
    <MainWrapper page={this.convertStringToNumber(this.props.page)} > 
        <p onClick={this.props.goToCart}>Sacola</p>
        <p>Pagamento</p>
        <p>Confirmação</p>
    </MainWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        goToCart: () => dispatch(push(routes.cart))
    }
}

export default connect(null, mapDispatchToProps)(Header);