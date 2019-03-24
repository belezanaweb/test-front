import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import './index.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Bag extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <p
              style={{
                color: '#999',
                weight: 'bold',
                fontSize: 14,
                fontFamily: 'Helvetica Neue',
                marginLeft: 20,
                marginRight: 20,
                height: 17
              }}
            >
              PRODUTOS
            </p>
            <Paper className={classes.paper}>
              <List>
                <ListItem
                  alignItems="flex-start"
                  style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#EEE',
                    marginBottom: 15
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem
                  alignItems="flex-start"
                  style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#EEE',
                    marginBottom: 15
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem
                  alignItems="flex-start"
                  style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#EEE' }}
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
            <List>
              <ListItem
                alignItems="flex-start"
                style={{
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#EEE',
                  marginTop: 15
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textPrimary">
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
            <Button
              fullWidth={true}
              variant="contained"
              size="large"
              className="MuiButton-contained-241"
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica Neue',
                fontSize: 20,
                fontWeight: 700
              }}
            >
              SEGUIR PARA O PAGAMENTO
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Bag.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Bag)
