import React from "react";

function Name(props)
{
    function handleChange(event){
        props.fname(event.target.value);
    }

return(
<div>
    <label htmlFor="Fname"><b>First Name:</b></label>
    <input type="text" onChange={handleChange} placeholder="First Name" required/>
</div>
);

}
export default Name;