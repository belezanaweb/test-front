import React from 'react'

import './App.css'
import Header from './components/Header'
import Home from './pages/Home'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


const App = () => {


return (

    <Router>
      <div >
        <Header />
        <div>
          <Route path='/' exact component={Home} />
        </div>
      </div>

    </Router>
  );


}

export default App
