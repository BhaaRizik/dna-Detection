import React from "react";

class Username extends React.Component {


handleChange= (event) => {
    this.props.userHub(event.target.value);
}

render(){    
    return(
        <div>
            <label for="Uname"><b>Username:</b></label>
            <input type="text" onChange={this.handleChange} 
            placeholder="Username"  required/>

        </div>
        );
   
}

}

export default Username;