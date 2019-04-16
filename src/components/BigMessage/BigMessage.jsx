import React from 'react'
import success from '../../assets/images/success-icon.png'

import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  container: {
    margin: { bottom: 20 },
  },
  icon: {
    display: 'block',
    margin: {
      top: 0,
      left: 'auto',
      right: 'auto',
      bottom: 10,
    },
  },
  text: {
    display: 'block',
    color: '#FF7800',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

const BigMessage = ({
  message,
}) =>
  <div className={classes.container}>
    <img src={success} className={classes.icon} alt="Success" />
    <span className={classes.text}>{message}</span>
  </div>

export default BigMessage
