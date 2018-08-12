import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 10px 20px 10px;

  .PaymentConfirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 20px;
  }

  #payment-confirmation-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35.91px;
    width: 35.91px;
    border: 2px solid #ff7800;
    border-radius: 100%;
    margin-bottom: 13px;
  }

  #success-purchase-message {
    p {
      height: 17px;
      color: #ff7800;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: NaNpx;
      line-height: 17px;
    }
  }

  #customer-info {
    height: 51px;
    color: #000;
    font-size: 14px;
    letter-spacing: NaNpx;
    line-height: 17px;
    text-transform: uppercase;

    ul {
      list-style: none;
    }
  }
`
