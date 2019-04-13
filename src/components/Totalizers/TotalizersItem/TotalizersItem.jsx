import React from 'react'

import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  row: {
    display: 'flex',
    margin: { bottom: 9 },
    '&:last-child': {
      margin: { bottom: 0 },
    }
  },
  column: {
    flex: 1,
    color: '#212122',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: '17px',
  },
  name: {
    textAlign: 'left',
  },
  price: {
    textAlign: 'right',
  },
  discountHighlight: {
    color: '#FF7800',
  },
  highlight: {
    fontWeight: 'bold',
    margin: { top: 7 },
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

const TotalizersItem = ({
  name,
  price,
  highlight,
}) => {
  const commonClasses = [classes.column]
  let priceText = `R$ ${Math.abs(price).toFixed(2).replace('.', ',')}`

  if (highlight)
    commonClasses.push(classes.highlight)

  if (price < 0) {
    commonClasses.push(classes.discountHighlight)
    priceText = '- ' + priceText
  }

  return (
    <div className={classes.row}>
      <span className={commonClasses.concat(classes.name).join(' ')}>
        {name}
      </span>
      <span className={commonClasses.concat(classes.price).join(' ')}>
        {priceText}
      </span>
    </div>
  )
}

export default TotalizersItem
