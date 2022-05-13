import React from 'react'
import { CancelOutlined } from '@material-ui/icons'
import { Button, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: '0px',
    alignItems: 'center',
    textAlignLast: 'center'
  },
  button: {
    backgroundColor: '#FF7800',
    color: '#fff',
    fontWeight: 'bold',
    width: '50%'
  },
  buttonContainer: {
    padding: '0px',
    marginTop: '10px'
  }
})

function NotFound() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <CancelOutlined
        style={{ color: '#FF7800', fontSize: 100, marginTop: '12px' }}
        fontSize="large"
      />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" size="large" href="/">
          Voltar para a sacola
        </Button>
      </div>
    </Container>
  )
}

export default NotFound
