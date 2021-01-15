import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Inp = styled(InputMask)`
box-sizing: border-box;
height: 45px;
width: 100%;
border-radius: 3px;
background-color: #FFF;
padding-left:20px;
border: 1px solid ${(props) => (props.classe ? 'red !important' : '#E7E7E7')};;
box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
color: #000;
transition: border-color 0.2s ease 0s;

	&:hover {
    transition: border-color 0.2s ease 0s;
    border-color: #E7E7E7;
    outline:none;
  }
  &:focus {
    transition: border-color 0.2s ease 0s;
    border-color: #eee;
    outline:none;
  }
  font-family:"Helvetica Neue";
  font-size: 16px;
  letter-spacing: 1.37px;
  line-height: 19px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #E0E7EE;
    opacity: 1; /* Firefox */
  }
  &.valid {
    border: 1px solid green !important;
    }
  &.invalid {
    border: 1px solid red ;
  }
}
`
