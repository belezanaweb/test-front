import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
    background: '#FFF',
    height: '40px'
  }
})

function Header({ select }) {
  const classes = useStyles()
  const selected = select

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Typography style={{ color: selected === 1 ? '#FF7800' : '#CCC', fontWeight: 'bold' }}>
          SACOLA
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={{ color: selected === 2 ? '#FF7800' : '#CCC', fontWeight: 'bold' }}>
          PAGAMENTO
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={{ color: selected === 3 ? '#FF7800' : '#CCC', fontWeight: 'bold' }}>
          CONFIRMAÇÃO
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Header
