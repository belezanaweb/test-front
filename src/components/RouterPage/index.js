import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const RouterPage = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/cart")
        }, 2000)
    }) 

    return (
        <h1>Ops, pagina não encontrada! Redirecionando para o carrinho...</h1>
    )
}

export default RouterPage;