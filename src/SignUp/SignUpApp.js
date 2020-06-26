import React from 'react'
import Email from '../SignIn/ForgetPasswrod/Email'
import Password from '../SignIn/ForgetPasswrod/NewPassword'
import ConfirmPassword from '../SignIn/ForgetPasswrod/Confirm'
import PhoneNumber from './PhoneNumber'
import FirstName from './Name'
import LastName from './Family'
import Cancel from './Cancel'
import SignUpButton from './SignUpButton'
import LogInPage from '../SignIn/LoginApp'
import './signup.css'
import '../index.css'

class SignUpApp extends React.Component {
  state = {
    fname: null,
    lname: null,
    phone: null,
    email: null,
    newPass: null,
    conf: null,
    isSignup: false
  }

  callbackFname = first => {
    this.setState({ fname: first })
  }

  callbackLname = last => {
    this.setState({ lname: last })
  }

  callbackEmail = mail => {
    this.setState({ email: mail })
  }

  callbackPhone = phn => {
    this.setState({ phone: phn })
  }
  callbackNewpass = pass => {
    this.setState({ newPass: pass })
  }
  callbackConfirm = con => {
    this.setState({ conf: con })
  }

  signup () {
    this.setState({ isSignup: true })
  }

  render () {
    return (
      <div>
        <h4>Sign Up Form</h4>

        {this.state.isSignup === false && (
          <form>
            <FirstName fname={this.callbackFname} />
            <LastName lname={this.callbackLname} />
            <PhoneNumber phone={this.callbackPhone} />
            <Email emailForgot={this.callbackEmail} />
            <Password newPassword={this.callbackNewpass} />
            <ConfirmPassword confirm={this.callbackConfirm} />
            <br />
            <br />
            <div className='clearfix'>
              <button
                type='submit'
                className='signupbtn'
                onClick={this.signup.bind(this)}
              >
                Cancel{' '}
              </button>

              <button
                type='submit'
                className='signupbtn'
                onClick={this.signup.bind(this)}
              >
                Sign Up
              </button>
            </div>
          </form>
        )}

        {/*this.state.isSignup === true && <LogInPage />*/}
      </div>
    )
  }
}

export default SignUpApp
