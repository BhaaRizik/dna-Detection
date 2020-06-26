import React from 'react'
import Search from './Search'
import ButtonsInMainPage from './ButtonsInMainPage'
import Login from '../SignIn/LoginApp'
import '../index.css'
import './comp.css'
class Home extends React.Component {
  render () {
    return (
      <div>
        <br />
        {/*  <Search/>   
                  <ButtonsInMainPage/>    */}
        <Login />
      </div>
    )
  }
}
export default Home
