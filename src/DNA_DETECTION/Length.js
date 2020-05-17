import React from "react";
import '../index.css';
import './dna.css';
export default class Slider extends React.Component{

state={
    value: 15
}

handleEventOnChange = (event) =>{
    this.setState({value:event.target.value});
    this.props.length(event.target.value);
}
///this.state.value => The lenght of primers
render(){
    
    return(
        <div className="lenP">
            <label for="len">{this.props.labelM} Lenght of primers:</label><br/>
            <input type="range" min={15} max={30} value={this.state.value} className="slider" onChange={this.handleEventOnChange}/>
            <div className="sliderValue">{this.state.value}</div>
        </div>
    )
}



}