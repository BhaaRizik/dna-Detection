import React from "react";
import '../index.css';
import './comp.css';

import {Link,NavLink} from 'react-router-dom';





class Header extends React.Component{


     myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
        }


    render(){
        return(
     
                    <ul className="horizUL"> 
                        <li><NavLink  to="/">Home</NavLink></li>
                        <li><NavLink to="about">About</NavLink></li>
                        <li ><NavLink to="logIn">Login</NavLink></li>
                        <li><NavLink to="signUp">SignUp</NavLink></li>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                              <i class="fa fa-bars"></i>
                        </a>
                    </ul>
                  
         // <h1>Header</h1>
        );
    }
}

export default Header;




