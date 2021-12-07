import React from 'react'

import './RowList.css'

const RowList = (props) => {
  const styleColor = {
    color: props.color,
    fontWeight: props.weight
  }

  const styleMargin = {
    marginBottom: props.space
  }

  return (
    <div className="RowList" style={styleMargin}>
      <div className="ColName" style={styleColor}>
        {props?.colname?.toUpperCase()}
      </div>
      <div className="ColValue" style={styleColor}>
        R$ {props?.colname?.toUpperCase() === 'DESCONTO' ? '-' : ''}
        {props?.colvalue?.toFixed(2)}
      </div>
    </div>
  )
}

export default RowList
