import React  from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core';

export default ({setStepActive}) =>{
    const history = useHistory()

    const handleConfirmation = () =>{
        setStepActive(2);
        history.push('/pagamento');
    }

    return(
        <>
            <Button color="primary" variant="contained" style={{marginTop: '20px'}} onClick={handleConfirmation}>Seguir para o pagamento</Button>
        </>
    )
}
