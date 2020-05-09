import React from "react";
import '../index.css';
import './comp.css';
import {Link,NavLink} from 'react-router-dom';


function ButtonsInMainPage(props) {
    const ncbiURL = "https://www.ncbi.nlm.nih.gov/";

    return ( 
    <div>
        <ul className = "verticalUL">
            <li> <a class = "active" href = {ncbiURL} > Connect to NCBI </a></li>
            <li> <a href = "dnaDetection" > DNA Detection </a></li>
            <li> <a href = "taxonomyTree" > Taxonomy Tree </a></li>
            <li> <a href = "research" > Research </a></li>
        </ul> 
    </div> 

    );

}

export default ButtonsInMainPage;