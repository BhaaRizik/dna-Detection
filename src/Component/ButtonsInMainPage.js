import React, { Fragment } from "react";
import DnaDetect from "../DNA_DETECTION/DNA_App";

import '../index.css';
import './comp.css';
import {Link,useParams,  useRouteMatch,Route, Switch, BrowserRouter} from 'react-router-dom';


function ButtonsInMainPage(props) {

    const ncbiURL = "https://www.ncbi.nlm.nih.gov/";
    let match = useRouteMatch();
    
  
    return ( 
    
       <BrowserRouter> 
            <ul className = "verticalUL">
                <li> <a className = "active" href = {ncbiURL} > Connect to NCBI </a></li>
                <li> <Link to = {`${match.url}/dnaDetection`} > DNA Detection </Link></li>
                <li> <Link to = "taxonomyTree" > Taxonomy Tree </Link></li>
                <li> <Link to = "research" > Research </Link></li>
            </ul> 
      

         <Switch>

            <Route path={`${match.path}/dnaDetection`}>
                <Dna/>
            </Route>

        </Switch>
    </BrowserRouter>
 

    );

    function Dna(){
   
        let { topicId } = useParams();
        return <h3>Requested topic ID: </h3>;
}

}

export default ButtonsInMainPage;