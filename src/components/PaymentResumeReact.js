import React, { useState } from 'react'
import store from '../store'

export default () => {
  const [resume] = useState(store.state.payment)

  const hideDigits = (str) => {
    return str.replace(/.(?=.{5})/g, "*")
  }

  return (
    <>
      <div style={styles.paymentResume}>
        <ul style={styles.list}>
          <li style={styles.item}>
            { hideDigits(resume.creditCardNumber) }
          </li>
          <li style={styles.item}>
            { resume.holderName }
          </li>
          <li style={styles.item}>
            { resume.validity }
          </li>
        </ul>
      </div>
    </>
  )
}

const styles = {
  paymentResume: {
    backgroundColor: '#fff',
    padding: '14px 10px 7px 10px',
    borderRadius: '3px'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    color: '#000',
    fontSize: '14px',
    lineHeight: '17px',
    backgroundColor: '#fff',
  }
}
