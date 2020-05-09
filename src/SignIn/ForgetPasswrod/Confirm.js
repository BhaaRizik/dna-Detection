import React from "react";

function Confirm(props)
{

    function handleChange(event){
        props.confirm(event.target.value);
        }

return(
<div>
    <label for="Uname"><b>Confirm Password:</b></label>
    <input type="password" onChange={handleChange} placeholder="Confirm Password" required/>
</div>
);

}
export default Confirm;