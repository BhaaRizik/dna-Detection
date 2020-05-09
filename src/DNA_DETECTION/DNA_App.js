import React from "react";
import Browse from "./Browse";
import Len from "./Length";
import Distance from "./Distance";
import MType from "./MicrobeType";
import CheckButton from "./Check";
import '../index.css';
import './dna.css';


class DNA_App extends React.Component{

    state={length:null,distance:null,MicrobeType:null};

    callbackDistance=(dis) =>{
        this.setState({distance: dis});
    }
    callbackLen=(Len) =>{
        this.setState({length: Len});
    }
    callbackMicrobe=(microbe) =>{
        this.setState({MicrobeType: microbe});
    }

  render(){  
    return(
        <div className="dna">
           
            <div className="Condition">
            <div className="len">
                <Len length={this.callbackLen}  label="max"/>
                <Len length={this.callbackLen} label="min"/>
             </div>   
                <Distance distance={this.callbackDistance} label="max"/>
                <Distance distance={this.callbackDistance} label="min"/>
                <MType microbe={this.callbackMicrobe}/>
            </div>
           
            <Browse/>
            <CheckButton/>
        </div>
    );
  }
}
export default DNA_App;