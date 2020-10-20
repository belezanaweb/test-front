import React from 'react'
import { useLocation } from 'react-router-dom'

import './Steps.scss'

const Steps = () => {

  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className='steps'>
      <span className={ location.pathname === '/' ? 'steps__item steps__item--active' : 'steps__item' } >Sacola</span>
      <span className={ location.pathname === '/pagamento' ? 'steps__item steps__item--active' : 'steps__item' }>Pagamento</span>
      <span className={ location.pathname === '/confirmacao' ? 'steps__item steps__item--active' : 'steps__item' }>Confirmação</span>
    </header>
  )
}

export default Steps
