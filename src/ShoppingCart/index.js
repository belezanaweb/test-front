import React from 'react';
import HeaderDetailsCartSteps from './components/HeaderDetailsCartSteps';
import { Container} from '@material-ui/core'
import Step1 from './step1'

export default () =>{
    return(
        <>
        <Container maxWidth="lg" style={{height: '100vh'}} disableGutters={true}>
            <HeaderDetailsCartSteps/>
            <Container  maxWidth="lg" style={{paddingLeft: '9px', paddingRight: '9px'}}>
                <Step1/>
            </Container>
        </Container>
        </>
    )
}
