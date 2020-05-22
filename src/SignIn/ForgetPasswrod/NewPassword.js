import React from "react";

function NewPassword(props)
{

    function handleChange(event){
        props.newPassword(event.target.value);
        }

return(
<div>
    <label htmlFor="Uname"><b>New Password:</b></label>
    <input type="password" onChange={handleChange}  placeholder="New Password" required/>
</div>
);

}
export default NewPassword;