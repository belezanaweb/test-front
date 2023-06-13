import styled from 'styled-components'

export const Summary = styled.dl`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 0.5rem 0;
  margin: 0 0 24px 0;

  dt {
    flex: 0 0 50%;
  }

  dd {
    flex: 1 0 25%;
    text-align: right;
  }

  .highlight {
    font-size: 1rem;
    font-weight: 700;
  }

  .colored {
    color: #9222dc;
    font-weight: 700;
  }
`
