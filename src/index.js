import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Component/App";
import LoginApp from "./SignIn/login/LoginApp";
import Forgot from "./SignIn/ForgetPasswrod/Forgotpass";
import SignUp from "./SignUp/SignUpApp";
import DnaDetect from "./DNA_DETECTION/DNA_App";




ReactDOM.render( <App/> , document.getElementById('root'));
//ReactDOM.render( <LoginApp/> , document.getElementById('root'));
//ReactDOM.render( <Forgot/> , document.getElementById('root'));
//ReactDOM.render( <SignUp/> , document.getElementById('root'));
//ReactDOM.render( <DnaDetect/> , document.getElementById('root'));