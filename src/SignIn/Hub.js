import React from 'react'
import Username from './UserName'
import Password from './Password'
import Rememberme from './RememberMe'
import Cancel from './Cancel'
import Signup from '../SignUp/SignUpApp'
import ForgetPage from './ForgetPasswrod/Forgotpass'
import ButtonsInMainPage from '../Component/ButtonsInMainPage'
import Search from '../Component/Search'

class Hub extends React.Component {
  state = { userName: 'Log', password: 'In' }

  constructor (props) {
    super(props)
    this.state = {
      forgot: false,
      cancel: false,
      loginState: false,
      signup: false,
      logout: false
    }
  }

  callbackUsername = user => {
    this.setState({ userName: user })
    console.log('---' + user)
  }

  callbackPassword = pass => {
    this.setState({ password: pass })
  }

  forgot () {
    this.setState({ forgot: true })
    this.setState({ logout: true })
    // this.setState({ loginState: false })
  }
  signup () {
    console.log('signup')
    this.setState({ signup: true })
    this.setState({ logout: true })
    //this.setState({ loginState: true })
  }

  login () {
    console.log('login')

    //alert('Login will work here');
    this.setState({ loginState: true })
    this.setState({ signup: false })
    this.setState({ forgot: false })
    this.setState({ logout: false })
  }

  cancel () {
    this.props.history.goBack()
  }

  logut () {
    this.setState({ logout: false })
    this.setState({ signup: false })
    this.setState({ forgot: false })
    this.setState({ loginState: false })
  }

  render () {
    return (
      <div>
        <h1 className='title'>Welcom to ZPJ site</h1>
        {this.state.logout === false &&
          this.state.forgot === false &&
          this.state.loginState === false &&
          this.state.signup === false && (
            <form className='modal-content animate'>
              <Username userHub={this.callbackUsername} />
              <Password passHub={this.callbackPassword} />

              <button onClick={this.login.bind(this)}>Login</button>

              {/* <Rememberme />*/}

              <div className='container'>
                <button className='signupbtn' onClick={this.signup.bind(this)}>
                  Sign up
                </button>{' '}
                <button onClick={this.forgot.bind(this)} className='forget'>
                  Forgot Password ?
                </button>
              </div>
            </form>
          )}
        {this.state.forgot === true && <ForgetPage />}
        {this.state.loginState === true && (
          <button
            onClick={this.logut.bind(this)}
            className='logout'
            id='myTopnav'
          >
            Log out
          </button>
        )}
        {this.state.loginState === true && <Search />}
        {this.state.loginState === true && <ButtonsInMainPage />}
        {this.state.signup === true && <Signup />}
        {this.state.logout === true && <Hub />}
      </div>
    )
  }
}

export default Hub
