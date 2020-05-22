import React, { Fragment } from "react";
import DnaDetect from "../DNA_DETECTION/DNA_App";

import '../index.css';
import './comp.css';
import {Link,useParams,  useRouteMatch,Route, Switch, BrowserRouter} from 'react-router-dom';


function ButtonsInMainPage(props) {

    const ncbiURL = "https://www.ncbi.nlm.nih.gov/";
    let match = useRouteMatch();
    return (    
        <>
        <ul className="verticalUL">
            <li>{" "}<a className="active" href={ncbiURL}>  {" "} Connect to NCBI{" "}  </a> </li>
            <li> {" "}<Link to={`${match.url}dnaDetection`}> DNA Detection </Link> </li>
            <li>{" "} <Link to={`${match.url}taxonomyTree`}> Taxonomy Tree </Link> </li>
            <li> {" "}<Link to={`${match.url}research`}> Research </Link></li>
        </ul>

        <Switch>
          <Route exact path={`${match.path}dnaDetection`} component={Dna}>
            <Dna />
          </Route>
          <Route path={`${match.path}taxonomyTree`}>
            <TaxonomyTree />
          </Route>
          <Route path={`${match.path}research`}>
            <Research />
          </Route>
        </Switch>
      </>
    );

    function Dna(){
   
        return <DnaDetect/>;
}
function TaxonomyTree(){
   
    return <h3>taxonomyTree</h3>;
}
function Research(){
   
    return <h3>research</h3>;
}

}

export default ButtonsInMainPage;