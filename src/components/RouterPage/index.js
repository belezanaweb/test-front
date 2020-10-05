import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const RouterPage = () => {
    const history = useHistory();

    useEffect(() => {
        history.push("/cart")
    }) 

    return (
        <></>
    )
}

export default RouterPage;