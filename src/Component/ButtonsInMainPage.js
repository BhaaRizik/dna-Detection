import React from "react";
import DnaDetect from "../DNA_DETECTION/DNA_App";

import '../index.css';
import './comp.css';
import {Link,NavLink} from 'react-router-dom';


function ButtonsInMainPage(props) {
    const ncbiURL = "https://www.ncbi.nlm.nih.gov/";

    return ( 
    <div>
        <ul className = "verticalUL">
            <li> <a class = "active" href = {ncbiURL} > Connect to NCBI </a></li>
            <li> <Link to = "dnaDetection" > DNA Detection </Link></li>
            <li> <Link to = "taxonomyTree" > Taxonomy Tree </Link></li>
            <li> <Link to = "research" > Research </Link></li>
        </ul> 
    </div> 

    );

}

export default ButtonsInMainPage;