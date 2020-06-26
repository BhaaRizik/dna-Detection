import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'

import LogIn from '../SignIn/LoginApp'
import SignUp from '../SignUp/SignUpApp'

import '../index.css'
import './comp.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App
