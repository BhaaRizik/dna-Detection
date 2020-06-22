import React from "react";
import '../index.css';
import './dna.css';

function MicrobeType(props){

function handleChange(event){
    props.microbe(event.target.value);
}

    return(
        <div className="microbeType">
                <label htmlFor="Type">Microbee Type:</label>
                <input type="text" onChange={handleChange} id="mic"  />
        </div>
    );
}

export default MicrobeType;