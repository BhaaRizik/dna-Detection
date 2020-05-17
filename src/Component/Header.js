import React from "react";

import Home from './Home';
import About from './About';

import LogIn from '../SignIn/login/LoginApp';
import SignUp from '../SignUp/SignUpApp';

import '../index.css';
import './comp.css';

import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom';

class Header extends React.Component{

state={
    isHome:false
}

changeState = ()=>{
    this.setState({isHome:true})
}


    render(){
        return(

       
  <BrowserRouter>     
         <ul className="horizUL"> 
            <li><NavLink onClick={this.changeState} to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li ><NavLink to="logIn">Login</NavLink></li>
            <li><NavLink to="signUp">SignUp</NavLink></li>
          </ul>

                  <Switch>

                 
<div className="container">
   <Route exact path="/">
      <HomePage/>
   </Route>
   <Route exact path="/about" >
        <AboutPage/>
   </Route>
   <Route exact path="/logIn">
      <LogInPage/>
   </Route>
   <Route exact path="/signUp">
      <SignUpPage/>
   </Route>
</div>

</Switch>

</BrowserRouter>
         // <h1>Header</h1>
        );
    }
}

function HomePage(){
    return( <Home/>);
 }
 
 function AboutPage(){
    return <About/>
 }
 
 function LogInPage(){
    return <LogIn/>
 }
 
 function SignUpPage(){
    return <SignUp/>
 }
export default Header;




