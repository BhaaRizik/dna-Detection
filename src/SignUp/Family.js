import React from "react";

function Family(props)
{

function handleChange(event){
    props.lname(event.target.value);
}

return(
<div>
    <label for="Lname"><b>Last Name:</b></label>
    <input type="text" onChange={handleChange} placeholder="Last Name" required/>
</div>
);

}
export default Family;