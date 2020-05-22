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
                <Len length={this.callbackLen}  labelM="Max"/>
                <Len length={this.callbackLen} labelM="Min"/>
             </div>   
                <Distance distance={this.callbackDistance} labelM="Max"/>
                <Distance distance={this.callbackDistance} labelM="Min"/>
                <MType microbe={this.callbackMicrobe}/>
            </div>
           
            <Browse className="browse"/>
            <CheckButton className="check"/>
        </div>
    );
  }
}
export default DNA_App;