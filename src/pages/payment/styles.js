import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 10px 20px 10px;

  form {
    input {
      height: 45px;
      background-color: #fff;
      border: 1px solid #e7e7e7;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      padding: 13px;
      color: #212121;
      font-size: 16px;
      line-height: 19px;

      &:focus {
        border: 1px solid #a43287;
      }

      ::-webkit-input-placeholder {
        height: 19px;
        color: #e0e7ee;
        font-size: 16px;
        line-height: 19px;
      }

      :-moz-placeholder {
        /* Firefox 18- */
        height: 19px;
        color: #e0e7ee;
        font-size: 16px;
        line-height: 19px;
      }

      ::-moz-placeholder {
        /* Firefox 19+ */
        height: 19px;
        color: #e0e7ee;
        font-size: 16px;
        line-height: 19px;
      }

      :-ms-input-placeholder {
        height: 19px;
        color: #e0e7ee;
        font-size: 16px;
        line-height: 19px;
      }
    }

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;

      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
      div:nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
    }

    label {
      height: 14px;
      color: #ccc;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: NaNpx;
      line-height: 14px;
      margin-top: 25px;
      margin-bottom: 5px;
    }
    #label-card-number {
      margin-top: 0 !important;
    }

    #card-number {
      border: ${props => props.withErrors.cardNumber && '1px solid #F30'};
    }
    #cardholder-name {
      border: ${props => props.withErrors.cardholderName && '1px solid #F30'};
    }
    #card-expiring-date {
      border: ${props => props.withErrors.cardExpiringDate && '1px solid #F30'};
    }
    #card-verification-value {
      border: ${props => props.withErrors.cardVerificationValue && '1px solid #F30'};
    }

    .inputError {
      height: 14px;
      color: #f30;
      font-size: 12px;
      letter-spacing: NaNpx;
      line-height: 14px;
      margin-top: 3px;
    }

    #card-expiring-date {
      margin-right: 20px;
    }
  }
`
