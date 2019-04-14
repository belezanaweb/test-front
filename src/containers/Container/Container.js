import styled from 'styled-jss'

const Container = styled('div')({
  padding: 10,
  '@media (min-width: 1024px)': {
    maxWidth: 920,
    margin: 'auto'
  }
})

export default Container
