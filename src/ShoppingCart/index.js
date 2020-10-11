import React, {useState} from 'react';
import HeaderDetailsCartSteps from './components/HeaderDetailsCartSteps';
import { Container} from '@material-ui/core'
import Step1 from './step1'

export default () =>{
    const [stepActive, setStepActive] = useState(0)
    return(
        <>
        <Container maxWidth="lg" style={{height: '100vh'}} disableGutters={true}>
            <HeaderDetailsCartSteps stepActive={stepActive}/>
            <Container  maxWidth="lg" style={{paddingLeft: '9px', paddingRight: '9px'}}>
                <Step1 setStepActive={setStepActive}/>
            </Container>
        </Container>
        </>
    )
}
