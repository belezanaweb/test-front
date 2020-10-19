import React from 'react'

import './Title.scss'

const Title = (props) => {

  return (

    <div className="title">
      <h1 className="title__text">
        { props.title }
      </h1>
    </div>

  )

}

export default Title
