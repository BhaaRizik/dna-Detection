import React from "react";

import {useHistory} from "react-router-dom";


function Cancel() {
    let history = useHistory()
    return (
      <button type="button" className="cancelUP" onClick={() => history.goBack()}>
       Cancel
      </button>
    )
  }

export default Cancel;