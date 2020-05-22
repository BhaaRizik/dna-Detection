import React from "react";

function Email(props)
{

function handleChange(event){
props.emailForgot(event.target.value);
}

return(
<div>
    <label htmlFor="Uname"><b>Email:</b></label>
    <input type="text" onChange={handleChange}  placeholder="Email" required/>
</div>
);

}
export default Email;