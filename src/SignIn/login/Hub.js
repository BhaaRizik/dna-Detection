import React from "react";
import Username from "./UserName";
import Password from "./Password";
import Submit from "./Submit";
import Rememberme from "./RememberMe";
import Cancel from "./Cancel";
import ForgetPass from "./Forget"

class Hub extends React.Component {

state={userName:"Log", password : "In"}

callbackUsername=(user)=>{
    this.setState({userName: user});
    console.log("---"+user)
}


callbackPassword = (pass) => {
     this.setState({ password: pass});
  }

  
render(){
return(
<div>
<h1> {this.state.userName} {this.state.password}</h1>
    <form class="modal-content animate">

        <Username userHub={this.callbackUsername}/>
        <Password passHub={this.callbackPassword}/>

        <Submit/>
        <Rememberme/>
       
        <div class="container">
            <Cancel/>
            <ForgetPass/>
        </div>
    </form> 
</div>

);
}
}

export default Hub;