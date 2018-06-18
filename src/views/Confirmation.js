import React, { Component } from 'react';

import { connect } from 'react-redux';


/** -----------------------------------------------
 * This class provide the Confirmation view
 * 
 * 
 * Objective
 * - ..

 */
class Confirmation extends Component {

    constructor(props) {
        super(props);
       
    }


    render() {

        return (
            <div>Confirmation</div>

        )
    }

}

// Decorate the component with reducer attributes
/*const mapStateToProps = state => {

    //const usuarioLogado = state.CartReducer.data;
    return {
        botao_atualiza_perfil,
        carregando_perfil,
        usuarioLogado,
        perfil,
        atualizando_perfil
    }
}*/

//use conector redux to decorate component with variables and methods
export default connect(null, {
   
})(Confirmation);