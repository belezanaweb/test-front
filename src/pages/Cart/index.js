import React, {useState,useEffect} from 'react';
import HeaderDetailsCartSteps from './components/HeaderDetailsCartSteps';
import { Box, Container, CircularProgress, makeStyles} from '@material-ui/core';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import { useHistory } from 'react-router-dom';
import getData from './services';

const renderStep = (step, listItens, amountProducts) =>{
    switch(step){
        case 0:
        return <Step1 data={{listItens: listItens, amountProducts: amountProducts }}/>;
        case 1:
        return <Step2 data={{listItens: listItens, amountProducts: amountProducts }}/>;
        case 2: 
        return <Step3 data={{listItens: listItens, amountProducts: amountProducts }}/>;
        default:
            return <Step1 data={{listItens: listItens, amountProducts: amountProducts }} />;
    }
}

const useStyles = makeStyles((theme) => ({
    loading: {
        position: 'absolute', 
        left: '0', 
        top: '0',
        zIndex: '1', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        width: '100%', 
        height: '100vh'
    },
  }));

export default () =>{
    const [stepActive, setStepActive] = useState(0)
    const history = useHistory()
    const [data, setData] = useState({})
    const classes = useStyles();

    const [listItens, setListItens] = useState(null)
    const [amountProducts, setAmountProducts] = useState({})

    //consume endpoint
    useEffect(()=>{
        getData()
            .then(response =>{
                setData(response.data)
            })
      },[])

    useEffect(()=>{
        if(!data) return;
        setListItens(data.items)
        setAmountProducts(prevState =>({...prevState, 
        subTotal: data.subTotal,
        freight: data.shippingTotal,
        discount: data.discount,
        total: (data.subTotal + data.shippingTotal) - data.discount
    }))
    },[data])

    //check url to define step
    useEffect(()=>{
        switch(history.location.pathname){
            case '/':
                return setStepActive(0);
            case '/pagamento':
                return setStepActive(1);
            case '/confirmacao':
                return setStepActive(2);
            default:
                return null;
        }
    },[history.location.pathname])

    return(
        <>
        <Container maxWidth="lg" style={{height: '100vh'}} disableGutters={true}>
            <HeaderDetailsCartSteps stepActive={stepActive}/>
            <Container  maxWidth="lg" style={{paddingLeft: '9px', paddingRight: '9px'}}>
                {data ? renderStep(stepActive, listItens, amountProducts) : <Box className={classes.loading}><CircularProgress/></Box>}
            </Container>
        </Container>
        </>
    )
}
