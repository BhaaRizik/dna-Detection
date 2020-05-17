import React from "react";
import Search from './Search';
import ButtonsInMainPage from './ButtonsInMainPage';
import DnaDetect from "../DNA_DETECTION/DNA_App";
import LogIn from '../SignIn/login/LoginApp';


import '../index.css';
import './comp.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


class Home extends React.Component {
    render(){  
          return ( 
              <div >
                 
                  <br/>
                  <Search/>   
                  <ButtonsInMainPage/>                        
              </div>   

          );
    }
  }

 
  export default Home;