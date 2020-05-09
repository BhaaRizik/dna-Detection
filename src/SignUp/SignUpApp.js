import React from "react";
import Email from "../SignIn/ForgetPasswrod/Email";
import Password from "../SignIn/ForgetPasswrod/NewPassword";
import ConfirmPassword from "../SignIn/ForgetPasswrod/Confirm";
import PhoneNumber from "./PhoneNumber";
import FirstName from "./Name";
import LastName from "./Family";
import Cancel from "./Cancel";
import SignUpButton from "./SignUpButton";
import "./signup.css";
import '../index.css';


class SignUpApp extends React.Component{

    state={fname:null, lname:null, phone:null, email:null,newPass:null,conf:null};

    callbackFname=(first) =>{
        this.setState({fname: first});
    }

    callbackLname=(last) =>{
        this.setState({lname: last});
    }

    callbackEmail=(mail) =>{
        this.setState({email: mail});
    }

    callbackPhone=(phn) =>{
        this.setState({phone: phn});
    }
    callbackNewpass=(pass) =>{
        this.setState({newPass: pass});
    }
    callbackConfirm=(con) =>{
        this.setState({conf: con});
    }

render()
{
    return(
        <div>
            <h4>Sign Up Form</h4>
            <form>
                <FirstName fname={this.callbackFname}/>
                <LastName lname={this.callbackLname}/>
                <PhoneNumber phone={this.callbackPhone}/>
                <Email emailForgot={this.callbackEmail}/>
                <Password newPassword={this.callbackNewpass}/>
                <ConfirmPassword confirm={this.callbackConfirm}/>
                <br/>
                <br/>
                    <div class="clearfix">
                                <Cancel/>
                                <SignUpButton/>
                    </div>
            </form>
        </div>
    );
 }
}

export default SignUpApp;
