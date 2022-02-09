import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.types.title};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    fieldset {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1.2rem;
        line-height: 1.4rem;
        font-weight: bold;
        color: #ccc;
        margin-bottom: 5px;
      }
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

  a {
    display: flex;
    gap: 1rem;
    padding: 1rem 1.2rem;

    font-size: 1.3rem;
    line-height: 1.6rem;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.3rem;

    img {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
