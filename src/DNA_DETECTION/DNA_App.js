import React from "react";
import Browse from "./Browse";
import Len from "./Length";
import Distance from "./Distance";
import MType from "./MicrobeType";
import CheckButton from "./Check";
import '../index.css';
import './dna.css';


class DNA_App extends React.Component{

    state={MAX_length:15,MIN_length:15,MAX_distance:null,MIN_distance:null,MicrobeType:null};

    callbackMaxDistance=(dis) =>{
        this.setState({MAX_distance: dis});
    }
    callbackMinDistance=(dis) =>{
        this.setState({MIN_distance: dis});
    }



    callbackMaxLen=(Len) =>{
        console.log("LenB = "+Len);
        this.setState({MAX_length: Len});
        console.log(this.state.MAX_length);
        console.log("Len = "+Len);
    }

    callbackMinLen=(Len) =>{
        console.log("LenB = "+Len);
        this.setState({MIN_length: Len});
        console.log("Len = "+Len);
        console.log("min"+this.state.MIN_length);
    }
    callbackMicrobe=(microbe) =>{
        this.setState({MicrobeType: microbe});
    }

  render(){  
    return(
        <div className="dna">
           
            <div className="Condition">
            <div className="len">
                <Len length={this.callbackMaxLen}  labelM="Max"/>
                <Len length={this.callbackMinLen} labelM="Min"/>
             </div>   
                <Distance distance={this.callbackMaxDistance} labelM="Max"/>
                <Distance distance={this.callbackMinDistance} labelM="Min"/>
                <MType microbe={this.callbackMicrobe}/>
            </div>
           
            <Browse className="browse"
                 maxLen={this.state.MAX_length} minLen={this.state.MIN_length}
                 maxDistance={this.state.MAX_distance} minDistance={this.state.MIN_distance}
                 MicrobeType={this.state.MicrobeType}  
                 />
        </div>
    );
  }
}
export default DNA_App;