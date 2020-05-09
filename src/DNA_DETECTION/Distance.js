import React from "react";
import '../index.css';
import './dna.css';

function Distance(props){

    function handleChange(event){
        props.distance(event.target.value);
    }

    return(
        <div className="distance" >
                <label for="distance">{props.label} Distance between primers:</label>
                <input type="number" onChange={handleChange} placeholder="Distance:700-1000" min="700" max="1000"  />
        </div>
    );
}

export default Distance;