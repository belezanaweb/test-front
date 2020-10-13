import React, {useEffect, useState} from 'react';
import { makeStyles, Typography} from '@material-ui/core';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '12px',
    '& input:last-child':{
      marginBottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%'
    },
    '& label':{
      color: theme.palette.secondary.light,
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.75rem',
      marginBottom: theme.spacing(0.625)
    },
    '& input':{
      boxSizing: 'border-box',
      height: '45px',
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#FFF',
      border: '1px solid #E7E7E7',
      boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.2)',
      padding: `${theme.spacing(2)}px`,
      '&::placeholder':{
        color: '#E0E7EE'
      }
    },
  },
  formFooter:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: theme.spacing(2.5)
  },
  dividers:{
    marginBottom: theme.spacing(3.125),
  }
  }));

  export const formatCardNumber = value => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
  }

  export const formatCardExpirationDates = value => {
    const regex = /^(\d{0,2})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
    return onlyNumbers.replace(regex, (regex, $1, $2) =>
      [$1, $2].filter(group => !!group).join('/')
    )
  }

export default function PaymentInputs(props) {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const history = useHistory();
  const [errorDate, setErrorDate] = useState(false);
  const [errorCCNumber, setErrorCCNumber] = useState(false);

  const todayDate = new Date();

  useEffect(()=>{
    if(!cardExpiration) return;
    if(cardExpiration.length === 7){
      const format = new Date(`${cardExpiration.split('/').reverse().join(',')},${todayDate.getDate()+1}`);
      if(format.getTime() < todayDate.getTime() || isNaN(Date.parse(format))){
        setErrorDate(true)
      }
      else{
        setErrorDate(false)
      }
    }
  },[cardExpiration,todayDate])

  useEffect(()=>{
    if(cardNumber.length > 0 && cardNumber.length !== 19){
      setErrorCCNumber(true)
    }else{
      setErrorCCNumber(false)
    }
  },[cardNumber.length])

  const { register, handleSubmit } = useForm();
  const onSubmit = data =>  {
    if(!data) return;
    history.push({pathname: '/confirmacao', state: data})
  }

  useEffect(()=>{
    if(cardNumber !== "" && !errorCCNumber && cardName !== "" && cardExpiration !== "" && cardCVV !== "" && !errorDate){
      props.enabled(false)
    }else{
      props.enabled(true)
    }
  },[props, cardNumber, cardName, cardExpiration, cardCVV, errorDate, errorCCNumber])

  return (
    <form id='formCredicCard' className={classes.root} onSubmit={handleSubmit(onSubmit)} action="POST">
      
      <div className={classes.dividers}>
      <label>Número do cartão:</label>
      <input placeholder="____ ____ ____ ____" ref={register} onChange={e=> setCardNumber(formatCardNumber(e.target.value))} value={cardNumber} maxLength="19" name="ccNumber"/>
      {errorCCNumber && <Typography variant="caption" style={{color: 'red'}}>Preencha todos os dígitos</Typography>}
      </div>

      <div className={classes.dividers}>
      <label>Nome do Titular:</label>
      <input placeholder="Como no cartão" name="ccName" ref={register}  onChange={ e=> setCardName(e.target.value)} value={cardName}/>
      </div>

      <div className={classes.formFooter}>
        <div>
          <label>Validade (mês/ano):</label>
          <input 
            placeholder="__/____" 
            onChange={e=> setCardExpiration(formatCardExpirationDates(e.target.value))} 
            value={cardExpiration} 
            maxLength="7" 
            name="ccExpirateDate"
            ref={register}
            />
            {errorDate && <Typography variant="caption" style={{color: 'red'}}>Data inválida</Typography>}
        </div>
        <div>
          <label>CVV:</label>
          <input placeholder="___" label="CVC" maxLength="3" name="ccCVV" ref={register} onChange={ e=> setCardCVV(e.target.value)} value={cardCVV} />
        </div>
      </div>
    </form>
  );
}