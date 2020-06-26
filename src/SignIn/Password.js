import React from "react";
import S from "./Submit";
class Password extends React.Component {

handleChange=(event)=>{

this.props.passHub(event.target.value);
}

render(){
    return(
    <div>
        <label htmlFor="pass"><b>Password:</b></label>
        <input type="password" onChange={this.handleChange} 
        placeholder="Password"   required/>
    
    </div>

    );
    }
}

export default Password;