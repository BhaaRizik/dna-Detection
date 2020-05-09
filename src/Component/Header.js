import React from "react";
import '../index.css';
import './comp.css';

import {Link,NavLink} from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
         <ul className="horizUL"> 
            <li><NavLink  to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li ><NavLink to="logIn">Login</NavLink></li>
            <li><NavLink to="signUp">SignUp</NavLink></li>
          </ul>
         // <h1>Header</h1>
        );
    }
}

export default Header;




