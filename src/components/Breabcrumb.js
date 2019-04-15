/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types';

const BreadCrumb = styled.nav`
  display: flex;
  align-items: center;
  height: 32px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
  min-width: 320px;

  section {
    display: flex;
    justify-content: space-between;
    width: 95%;
	  margin: auto;
  }

  span {
    text-decoration: none;
    color: #CCCCCC;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
  }

  .orange {
	color: #FF7800;
  }  
`
const Breadcrumb = ({step}) => {    
    return (
        <BreadCrumb>
          <section>
            <span className={step === 1 ? 'orange': ''}>
                SACOLA
            </span>
            <span className={step === 2 ? 'orange': ''}>
                PAGAMENTO
            </span>
            <span className={step === 3 ? 'orange': ''}>
                CONFIRMAÇÃO
            </span>
          </section>
        </BreadCrumb>
    )
}

BreadCrumb.propTypes = {
    step: PropTypes.number
}

export default Breadcrumb