import React from "react";
import Username from "./UserName";
import Password from "./Password";
import Rememberme from "./RememberMe";
import Cancel from "./Cancel";
import ForgetPage from "../ForgetPasswrod/Forgotpass"


class Hub extends React.Component {

   
state={userName:"Log", password : "In"}

constructor(props) {
    super(props);
    this.state = {
        forgot: false,
        cancel: false
    };
  
}

callbackUsername=(user)=>{
    this.setState({userName: user});
    console.log("---"+user)
}

callbackPassword = (pass) => {
     this.setState({ password: pass});
  }

  forgot() {
    this.setState({forgot: true})
}

login() {
    alert('Login will work here');
}

cancel() {
    this.props.history.goBack();
}

render(){
return(
<div>
<h1> {this.state.userName} {this.state.password}</h1>
    {this.state.cancel === false && this.state.forgot === false && <form className="modal-content animate">

        <Username userHub={this.callbackUsername}/>
        <Password passHub={this.callbackPassword}/>

        <button onClick={this.login.bind(this)}>Login</button>

                <Rememberme/>
       
        <div className="container">
           <Cancel/>
            <button onClick={this.forgot.bind(this)}  className="forget">Forgot Password ?</button>


        </div>
    </form> }
    {this.state.forgot === true && <ForgetPage/>}
    {this.state.cancel === true && <ForgetPage/>}
</div>

);
}
}

export default Hub;