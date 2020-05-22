import React from "react";


function PhoneNumber(props){

    function handleChange(event){
        props.phone(event.target.value);
    }

return(
<div>
<label htmlFor="phone"><b>Phone number:</b></label>
    <input type="number" onChange={handleChange} min="0" placeholder="Phone number" required/>

</div>
);

}
export default PhoneNumber;