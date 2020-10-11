import React, {useState} from 'react';
import HeaderDetailsCartSteps from './components/HeaderDetailsCartSteps';
import { Container} from '@material-ui/core'
import Step1 from './step1'
import Step2 from './components/step2'
import Step3 from './step3'

const renderStep = (step, setStepActive) =>{
    switch(step){
        case 0:
        return <Step1 setStepActive={setStepActive}/>;
        case 1:
        return <Step2 setStepActive={setStepActive}/>;
        case 2: 
        return <Step3 setStepActive={setStepActive}/>;
        default:
        return null;
    }
}

export default () =>{
    const [stepActive, setStepActive] = useState(0)
    return(
        <>
        <Container maxWidth="lg" style={{height: '100vh'}} disableGutters={true}>
            <HeaderDetailsCartSteps stepActive={stepActive}/>
            <Container  maxWidth="lg" style={{paddingLeft: '9px', paddingRight: '9px'}}>
                {renderStep(stepActive, setStepActive)}
            </Container>
        </Container>
        </>
    )
}
