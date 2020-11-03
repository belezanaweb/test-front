
import styled from 'styled-components';
import {useRecoilState} from 'recoil'
import {headerPage} from '../../store/cart';
import {useEffect} from 'react';
const Header = ({page}) => {

	const [statePage, setStatePage] = useRecoilState(headerPage);
	useEffect(()=>{
		if(statePage != page){
			setStatePage(page)
		}
	},[])


	return (
		<HeaderStyled>
			<ul>
				<li className={statePage == 1 ? 'checked' : undefined}>Sacola</li>
				<li className={statePage == 2 ? 'checked' : undefined}>Pagamento</li>
				<li className={statePage == 3 ? 'checked' : undefined}>Confirmação</li>
			</ul>
		</HeaderStyled>
	)
}
export default Header


const HeaderStyled = styled.header`
	display:flex;
	width:100%;
	height:42px;
	border-radius:3px;
	box-shadow: 1px 1px 5px rgba(0,0,29,0.22);
	background:#fff;
	ul{
		width:100%;
		box-sizing:border-box;
		margin: 0 18px;
		display:flex;
		flex-flow:row;
		justify-content:space-between;
		align-items:center;
		@media(min-width:1024px){ 
			max-width: 480px;
			margin: auto;
		}
		li{
			font-size:13px;
			font-weight: bold;
			text-transform:uppercase;
			height: 16px;
			color: #CCC;
			font-size: 13px;
			font-weight: 700;
			line-height: 16px;
			text-align: center;

			&.checked{
				color:${({ theme }) => theme.colors.primary};
			}
		}
	}
`
