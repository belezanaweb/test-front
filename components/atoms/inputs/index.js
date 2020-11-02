import { useEffect } from 'react';
import styled from 'styled-components';
import MaskInput from 'react-maskinput';
import { useState } from 'react';
import validation from '../../../helpers/validation'

const Input = ({type, onChange,keyUp,defaultValue, placeholder, name, id, value, withMask}) => {


  const handleBlur = e=>{
    let val = e.target.value;
    var parent = e.target.parentElement
    validation.inputs(e.target.id, val, parent)
  
  }

  const handleFocus = e => {
    let val = e.target.value;
    var parent = e.target.parentElement
    if(parent.classList.contains('error')){
      parent.classList.remove('error')
    }
  }

  if(!!withMask){
    if(id == 'date'){

      const [mask, setMask] = useState('00/0000');
      const [maskString, setMaskString] = useState('--/----');

      const onChange = e => {
        setMaskString('--/----');
        setMask('00/0000');
      };

      return (
        <MaskInput id={id} onFocus={handleFocus} name='validade' onBlur={handleBlur} id={id} alwaysShowMask onChange={onChange} maskString={maskString} mask={mask} size={20} />
      )
    }

    if(id == 'nbCC'){
      const [mask, setMask] = useState('0000-0000-0000-0000');
      const onChange = e => {
          if (e.target.value.indexOf('34') === 0 || e.target.value.indexOf('37') === 0) {
              setMask('0000-000000-00000');
              return;
          }
          setMask('0000-0000-0000-0000');
      };
       return(
        <MaskInput  id={id} onFocus={handleFocus} name='ccNumber' onBlur={handleBlur} onChange={onChange} maskChar="_" mask={mask} alwaysShowMask size={20} />
      )  
    }
    if(id == 'ccv'){
      const [mask, setMask] = useState('000');
      const onChange = e => {
          if (e.target.value.indexOf('34') === 0 || e.target.value.indexOf('37') === 0) {
              setMask('000');
              return;
          }
          setMask('000');
      };
       return(
        <MaskInput id={id} onFocus={handleFocus} onBlur={handleBlur} onChange={onChange} maskChar="_" mask={mask} alwaysShowMask size={20} />
      )  
    }
  
  }else{
    return (
      <input required onKeyUp={keyUp}  onBlur={handleBlur} name='nome' value={value} defaultValue={defaultValue} name={name}  id={id} placeholder={placeholder} type={type} onChange={onChange} />
    )
  }
}
export default Input

