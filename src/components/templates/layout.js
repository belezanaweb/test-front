
import styled from 'styled-components';

const Layout = ({children}) => {
	return (
		<Main>
			{children}
		</Main>
	)
}
export default Layout


const Main = styled.main`
	border:solid red;
`
