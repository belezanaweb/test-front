import styled from 'styled-components';

const Container = ({children, id, className}) => {
	return (
		<StyledContainer className={className} id={id}>{children}</StyledContainer>
	)
}
export default Container

const StyledContainer = styled.div`
	display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    padding: 9px;
	flex-flow: row wrap;
	color: #212122;
	h2{
		color: #999;
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		margin-bottom:5px;
	}
	section{
		margin-bottom:20px;

      
		ul{
			width: 100%;
			&.totalTable{
				border-radius: 3px;
  				border: 1px solid #CCC;
				display: flex;
    			flex-flow: row wrap;
				padding:10px;
				  li{
					font-size: 14px;
					line-height: 17px;
					width:100%;
					text-transform:uppercase;
					display:flex;
					justify-content:space-between;
					margin-bottom:10px;
					&.feat{
						color: ${({ theme }) => theme.colors.primary};
						margin-bottom:0;
					}
					&.total{
						font-weight:700;
						margin-bottom:0;
						margin-top:15px;
					}
				  }
			}
		}

      
	}


`;
