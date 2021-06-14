import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-4);

  > div {
    width: 100%;
  }

  #expirationDate-group {
    width: calc(60% - 10px);
  }

  #verificationCode-group {
    width: calc(40% - 10px);
  }

  @media ${device.tablet} {
    #name-group {
      width: calc(50% - 10px);
    }
    #creditCardNumber-group {
      width: calc(50% - 10px);
    }
  }

  @media ${device.desktop} {
    #name-group {
      width: calc(100%);
    }
    #creditCardNumber-group {
      width: calc(100%);
    }
  }
`
