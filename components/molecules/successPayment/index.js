
import { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userData } from '../../../store/cart';
const SuccessPayment = ({children, isValid}) => {

    const userCC = useRecoilValue(userData)
	return (
		<UserData >
            <h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    >
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm7 7.457l-9.005 9.565L5 12.157l.761-.649 4.271 5.016 8.24-8.752.728.685z"></path>
                </svg>
             <b> Compra efetuada com sucesso</b>
            </h1>
			<h2>Pagamento</h2>
            <div>
            {!!userCC.nome && <>
                <span>{'xxxx-xxxx-xxxx-'+userCC.numero}</span>
                <span>{userCC.nome.toUpperCase()}</span>
                <span>{userCC.validade}</span>
            </>}
           
            </div>
		</UserData>
	)
}

export default SuccessPayment


const UserData = styled.section`
  width: 100%;
  margin-top:12px;

    h1{
        width: 100%;
        color: #FF7800;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        text-align: center;
        display:flex;
        justify-content:center;
        flex-flow: row wrap;
        text-transform:uppercase;
        margin-bottom:20px;
        svg{
            transform: scale(1.7);
            height:40px;
            path{
                fill: #FF7800;

            }
        }
        b{
            width: 100%; 
        }
    }
    div{
        background:#fff;
        height: 73px;
        width:100%;
        display:flex;
        padding:10px;
        box-sizing:border-box;
        flex-flow:row wrap;
        span{
            width:100%;
            color: #000;
            font-size: 14px;
            line-height: 17px;
        }
    }
   
`;