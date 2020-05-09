import React from "react";
import Search from './Search';
import ButtonsInMainPage from './ButtonsInMainPage';
import DnaDetect from "../DNA_DETECTION/DNA_App";
import LogIn from '../SignIn/login/LoginApp';


import '../index.css';
import './comp.css';
import {BrowserRouter, Route} from 'react-router-dom';


class Home extends React.Component {
    render(){  
          return ( 
              <div >
                 
                  <br/>
                  <Search/>
                 
                  <BrowserRouter>      
                    <ButtonsInMainPage/>
                          <Route  path="/dnaDetection" component={DnaDetect} />
                  


                 </BrowserRouter>
  
              </div>   
  
          );
    }
  }

  export default Home;