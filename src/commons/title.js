import React from 'react'
import './title.css'

const Title = ({ text, classname = '' }) => <span className={'title ' + classname}>{text}</span>

export { Title }
