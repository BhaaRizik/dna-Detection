
import React from "react";
import ForgetPage from "../ForgetPasswrod/Forgotpass"
import {Link,useParams,  useRouteMatch,Route, Switch, BrowserRouter} from 'react-router-dom';

function Forget() {

    let match = useRouteMatch();

return(
<div>

<BrowserRouter>
<Link to={`${match.url}/forgetPassword`}  className="forget">Forgot password?</Link>


<Switch>

<Route exact path={`${match.path}/forgetPassword`} >
            <ForgetPass />
          </Route>

</Switch>

</BrowserRouter>


</div>

);
function ForgetPass(){

    return <ForgetPage/>;
    
    }
}

export default Forget;

