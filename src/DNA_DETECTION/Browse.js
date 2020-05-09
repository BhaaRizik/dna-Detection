import React from "react";
import '../index.css';
import './dna.css';



export default class Browse extends React.Component {

    state = {
        files: []
    };

    fileUpload = (e) => {
        this.setState({files: [...e.target.files]});
    };

    render() {
        return (
            <div className="Browse">
               <label>Insert DNA Files:</label>
                <input type="file" multiple="multiple" id="file" onChange={this.fileUpload}/>
                <table className="filesName">
                    
                    {
                        this.state.files.map((file, i) => <tr key={i}>
                                                            <td style={{textAlign:"left"}}>{file.name} : </td>
                                                            <td><button>Change</button></td>
                                                            <td><button>Delete</button></td>
                                                            </tr>)
                    }
                   
                </table>
            </div>
        );
    }
}