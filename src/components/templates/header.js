
import styled from 'styled-components';

const Header = ({page}) => {
	return (
		<HeaderStyled>
			<ul>
				<li className={page == 1 && 'checked'}>Carrinho</li>
				<li className={page == 2 && 'checked'}>Pagamento</li>
				<li className={page == 3 && 'checked'}>Confirmação</li>
			</ul>
		</HeaderStyled>
	)
}
export default Header


const HeaderStyled = styled.header`
	border:solid red;
	ul{
		li{
			&.checked{
				color:orangered;
			}
		}
	}
`
