/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/*** Components*/
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#FF7800'
    }
  }
})(props => <Tabs variant="fullWidth" {...props} TabIndicatorProps={{ children: <div /> }} />)

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#757575',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />)

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'transparent'
  }
}))

const TabsComponent = ({ selected, handleTab }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={8} className={classes.appBar}>
        <StyledTabs value={selected} onChange={(e, newValue) => handleTab(newValue)}>
          <StyledTab label="Sacola" />
          <StyledTab label="Pagamento" />
          <StyledTab label="Confirmação" disabled />
        </StyledTabs>
      </AppBar>
    </div>
  )
}

TabsComponent.propTypes = {
  selected: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired
}

export default TabsComponent
