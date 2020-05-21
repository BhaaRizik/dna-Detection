import React from "react";
import Search from './Search';
import ButtonsInMainPage from './ButtonsInMainPage';
import '../index.css';
import './comp.css';
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