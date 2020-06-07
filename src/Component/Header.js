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


         <ul className="horizUL" id="myTopnav">  
           <li> <NavLink  className="home" onClick={this.changeState} to="/">Home</NavLink> </li>
            <li><NavLink to="about">About  </NavLink></li>
            <div className="goRight">
                <li ><NavLink  to="logIn">Login </NavLink></li>
                <li><NavLink   to="signUp">SignUp</NavLink></li>
            </div>
          </ul>

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




