
import React from "react";
import '../index.css';
import './comp.css';


function Search() {
    return ( 
    <div className = "search" >
        <input type = "text" placeholder = "Search.." id = "textSearch" />
        <button type = "submit"> Search </button>
        <br/> 
        <hr className = "line"/>    
    </div>




    );

}

export default Search;