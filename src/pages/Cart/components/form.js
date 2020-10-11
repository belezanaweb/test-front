import React, {useEffect, useState} from 'react';
import { makeStyles} from '@material-ui/core';
import { useForm } from "react-hook-form";

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
      marginBottom: theme.spacing(3.125),
      padding: `${theme.spacing(2)}px`,
      '&::placeholder':{
        color: '#E0E7EE'
      }
    }
  },
  formFooter:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: theme.spacing(2.5)
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
      [$1, $2].filter(group => !!group).join(' ')
    )
  }

export default function PaymentInputs(props) {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCVV, setCardCVV] = useState('')

  const [errorDate, setErrorDate] = useState(false);

  const data = new Date();
  let year = data.getFullYear();


  useEffect(()=>{
    if(!cardExpiration) return;
    if(cardExpiration.length === 7){
      if(cardExpiration.split(' ')[0] > 12 || cardExpiration.split(' ')[1] < year){
        setErrorDate(true)
      }
      else{
        setErrorDate(false)
      }
    }
  },[year,cardExpiration])

  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null)
  const onSubmit = data =>  setFormData(data);

  useEffect(()=>{
    // props.handleForm(formData)
    if(cardNumber !== "" && cardName !== "" && cardExpiration !== "" && cardCVV !== "" && !errorDate){
      props.handleForm(false)
    }else{
      props.handleForm(true)
    }
  },[formData, props, cardNumber, cardName, cardExpiration, cardCVV, errorDate])

  return (
    <form id='formCredicCard' className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <label>Número do cartão:</label>
      <input placeholder="____ ____ ____ ____" ref={register} onChange={e=> setCardNumber(formatCardNumber(e.target.value))} value={cardNumber} maxLength="19" name="ccNumber"/>
      <label>Nome do Titular:</label>
      <input placeholder="Como no cartão" name="ccName" ref={register}  onChange={ e=> setCardName(e.target.value)} value={cardName}/>
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
            {errorDate && 'Data inválida'}
        </div>
        <div>
          <label>CVV:</label>
          <input placeholder="___" label="CVC" maxLength="3" name="ccCVV" ref={register} onChange={ e=> setCardCVV(e.target.value)} value={cardCVV} />
        </div>
      </div>
    </form>
  );
}