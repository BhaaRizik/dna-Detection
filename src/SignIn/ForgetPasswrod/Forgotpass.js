import React from 'react'
import Email from './Email'
import Newpassword from './NewPassword'
import Confirm from './Confirm'
import Reset from './Reset'
import '../login.css'

class Forgotpass extends React.Component {
  state = { email: null, newPass: null, conf: null }

  callbackEmail = mail => {
    this.setState({ email: mail })
  }
  callbackNewpass = pass => {
    this.setState({ newPass: pass })
  }
  callbackConfirm = con => {
    this.setState({ conf: con })
  }

  render () {
    return (
      <div>
        <form>
          <h2>Forgot password?</h2>
          <Email emailForgot={this.callbackEmail} />
          <Newpassword newPassword={this.callbackNewpass} />
          <Confirm confirm={this.callbackConfirm} />
          <Reset />
        </form>
      </div>
    )
  }
}
export default Forgotpass
