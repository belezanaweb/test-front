import styled from 'styled-jss'

const Button = styled('button')({
  width: '100%',
  height: 60,
  padding: [0, 10],
  lineHeight: '60px',
  letterSpacing: 0.5,
  fontWeight: '700',
  color: '#fff',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderRadius: 3,
  backgroundColor: '#FF6C00',
  verticalAlign: 'middle',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: 20,
  border: 0,
  cursor: 'pointer',
  outline: 'none',
  boxShadow: [
    {
      inset: 'inset',
      x: 0,
      y: -3,
      blur: 0,
      color: '#D45A00',
    },
    {
      x: 0,
      y: 2,
      blur: 4,
      color: 'rgba(0,0,0,0.25)',
    },
  ],
  transition: {
    property: 'all',
    duration: '.2s',
    timingFunction: 'ease',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: '#D45A00',
    boxShadow: [
      {
        inset: 'inset',
        x: 0,
        y: 0,
        color: '#D45A00',
      },
      {
        x: 0,
        y: 0,
        blur: 0,
        color: 'rgba(0,0,0,0.25)',
      },
    ],
  },
  '&[disabled], &[disabled]:hover': {
    backgroundColor: '#CCC',
    cursor: 'not-allowed',
    boxShadow: [
      {
        inset: 'inset',
        x: 0,
        y: -3,
        blur: 0,
        color: '#BBB',
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        color: 'rgba(0,0,0,0.25)',
      },
    ],
  },
})

export default Button
