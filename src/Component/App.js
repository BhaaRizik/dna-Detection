import React from "react";
import Header from './Header';
import Home from './Home';
import About from './About';

import LogIn from '../SignIn/login/LoginApp';
import SignUp from '../SignUp/SignUpApp';

import '../index.css';
import './comp.css';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render(){  
        return ( 
            <div >
               
               <BrowserRouter>
                  <Header/>
                  <div className="container">
                     <Route exact path="/" component={Home}/>
                     <Route path="/about" component={About}/>
                     <Route path="/logIn" component={LogIn}/>
                     <Route path="/signUp" component={SignUp}/>
                  </div>
               </BrowserRouter>

            </div>   

        );
  }
}

export default App;