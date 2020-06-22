import React from "react";

import Home from './Home';
import About from './About';

import LogIn from '../SignIn/login/LoginApp';
import SignUp from '../SignUp/SignUpApp';

import '../index.css';
import './comp.css';

import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom';

class Header extends React.Component{


   myFunction() {
 
      let x = document.getElementById("myTopnav");
      console.log( "init "+x.className);

      if (x.className === "horizUL") {
         x.className += " responsive";
         console.log("**** "+ x.className);
       } else {
         x.className = "horizUL";
         console.log( x.className);

       }
      
    }


state={
    isHome:false
}

changeState = ()=>{
    this.setState({isHome:true})
}


    render(){
        return(

       
  <BrowserRouter>     

<div id="myTopnav">
         <ul className="horizUL" >  
           <li> <NavLink  className="home" onClick={this.changeState} to="/">ZBJ</NavLink> </li>
         
               <li><NavLink to="about">About</NavLink></li>
          
                <li><NavLink  to="logIn"  className="goRight" className="goRightLogin">Login </NavLink></li>
                <li><NavLink   to="signUp"  className="goRight" className="goRightSignup">SignUp</NavLink></li>      
           
        
          </ul>

         
      </div>
      <a className="icon" onClick={() =>this.myFunction()} >
               <i className="fa fa-bars"></i>
         
           </a>
                       
      <div className="container">
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/logIn">
          <LogInPage />
        </Route>
        <Route exact path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>

            

</BrowserRouter>
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




