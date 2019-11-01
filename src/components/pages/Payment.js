import React, {useState, useEffect } from 'react';
import UIButton from '../commons/UIButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UIHeader from '../commons/UIHeader';
import UIPaper from '../commons/UIPaper';
import UIPurchaseSummary from '../commons/UIPurchaseSummary';
import UIInput from '../commons/UIInput';
import CardValidator from 'card-validator';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { connect } from 'react-redux';
import userModel from '../../model/userModel';

const useStyles = makeStyles(theme=>({
    root: {
        color: '#CCC',
        padding: theme.spacing(0),
        width: '100%'
    },
}));

function Payment( props ){
    const classes = useStyles();
    const history = useHistory();
    const [validCreditcard, setValidCreditcard] = useState(false);
    const [validDate, setValidDate] = useState(false);
    const [validCVV, setValidCVV] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [values, setValues] = useState( props.user || {
        creditcard: '',
        name: '',
        validate: '',
        cvv: ''
    });

    const isValidCreditcard = (e) => {
        setValidCreditcard(!CardValidator.number(e.target.value.replace(/\./g,'')).isValid);
    }

    const isValidDate = (e) => {
        let year = e.target.value.slice(-4).replace(/\//g, '');
        let month = e.target.value.slice(0,2).replace(/\//g, '');
        let valid = false;

        if(
            month.match(/[0-9]{2}/gi) &&
            year.match(/[0-9]{4}/gi) &&
            parseInt(year) >= moment().year() && 
            parseInt(year) <= (moment().year() + 30)
        )
            valid = moment(`${year}-${month}-01`).isValid();
        else
            valid = false;
        
        setValidDate(!valid);
    }

    const isValidCVV = (e) => {
        setValidCVV( e.target.value.length < 3  );
    }

    const doSubmit = (e) => {
        e.preventDefault();
        props.dispatch(userModel.setUser(values));
        history.push('/confirmation');
    }

    const handleChange = ( evt ) => {
        evt.persist();
        setValues({...values, [evt.target.name]: evt.target.value});
    }

    useEffect(()=>{
        if(!props.products.length){
            history.push('/cart');
        }
    }, [props.products.length]);

    useEffect(()=>{
        setSubmit(!(!validCreditcard && !validDate && !validCVV && Object.values(values).indexOf('') === -1));
    }, [values]);

    return (
        <React.Fragment>
            <UIHeader step={1} />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <form onSubmit={doSubmit}>
                        <UIPaper title="CARTÃO DE CRÉDITO">
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <UIInput 
                                        type="creditcard" 
                                        name="creditcard"
                                        required 
                                        onChange={(e)=>{
                                            handleChange(e);
                                            isValidCreditcard(e);
                                        }}
                                        label="Número do Cartão" 
                                        placeholder="____.____.____.____.____" 
                                        error={validCreditcard}  
                                        infoempty="Obrigatório informar um cartão de crédito válido"
                                        infoerror="O número do cartão de crédito é inválido"
                                        value={values.creditcard}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <UIInput 
                                        label="Nome do titular"
                                        name="name"
                                        required placeholder="Como no cartão"
                                        value={values.name}
                                        onChange={(e)=>{
                                            handleChange(e);
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <UIInput
                                        label="Validade (mês/ano)" 
                                        name="validate" 
                                        required type="date" 
                                        onChange={(e)=>{
                                            handleChange(e);
                                            isValidDate(e);
                                        }}
                                        error={validDate}
                                        infoerror="Digite uma data válida" 
                                        infoempty="A data de validade deve ser informada" 
                                        placeholder="__/____" 
                                        value={values.validate}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <UIInput label="CVV" 
                                        mask={[/\d/, /\d/, /\d/]} 
                                        required 
                                        onChange={(e)=>{
                                            handleChange(e);
                                            isValidCVV(e);
                                        }} 
                                        name="cvv"
                                        error={validCVV} 
                                        infoerror="O valor deve conter 3 dígitos" 
                                        infoempty="O campo CVV deve ser preenchido" 
                                        maxLength="3" 
                                        placeholder="___" 
                                        value={values.cvv}
                                    />
                                </Grid>
                            </Grid>
                        </UIPaper>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <UIPurchaseSummary summary={props.summary}></UIPurchaseSummary>
                </Grid>
                <Grid item xs={12}>
                    <UIButton disabled={ submit } onClick={doSubmit}>
                        Finalizar o pedido
                    </UIButton>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default connect(store => ({ ...store }))(Payment);