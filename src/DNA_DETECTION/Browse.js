import React from "react";
import '../index.css';
// import './dna.css';
import axios from "axios";

export default class Browse extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            files: [],
            changedFileIndex: -1,
            fileReader : null
        };
        this.fileUploaderRef = React.createRef();
    }


handleFileChosen = async (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsText(file);
    });
  }
      delay=(ms) =>{
        return new Promise( resolve => setTimeout(resolve, ms) );
    }


readAllFiles = async (AllFiles) => {
      const results = await Promise.all(AllFiles.map(async (file) => {
      const fileContents = await this.handleFileChosen(file);
      console.log(":+"+fileContents);

      return fileContents;
    }));
    console.log(results);
   
results.map(async (result)=>{
    const response = await axios.post(
        'http://52.14.247.16:5000/process',
        { result },
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(response.data)

} )

console.log("minLen = "+this.props.minLen)
console.log("maxLen = "+this.props.maxLen)
console.log("maxDis = "+this.props.maxDistance)
console.log("maxDis = "+this.props.minDistance)
console.log("microbe = "+this.props.MicrobeType)

console.log(this.props.maxLen+"+"+this.props.minLen+"+"
+this.props.maxDistance+"+"+this.props.minDistance+"+"
+this.props.MicrobeType
            )

            axios.get('http://52.14.247.16:5000/start/'+ this.props.maxLen+"+"+this.props.minLen+"+"
            +this.props.maxDistance+"+"+this.props.minDistance+"+"
            +this.props.MicrobeType)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              }); 

  return results;
/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "ahha\n1";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://52.14.247.16:5000/process", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

  }




    fileUpload = (e) => {
        let changedFile = e.target.files[0];
        let uploadedFiles = e.target.files;

        if (this.state.changedFileIndex >= 0) {
            this.setState(prevState => {
                const list = [];
                prevState.files.map((file, i) => {
                    if (i === prevState.changedFileIndex)
                        list.push(changedFile);
                    else
                        list.push(file);
                });
                return {
                    files: list,
                    changedFileIndex: -1,
                };
            });
        } else if (this.state.files.length > 0) {
            this.setState(prevState => {
                return {files: [...prevState.files, ...uploadedFiles]}
            });
        } else
            this.setState({files: [...e.target.files]});
    };

    Change(index, file) {
        console.log("Change Function");
        this.setState({changedFileIndex: index});
        this.fileUploaderRef.current.click();
    }

    Delete(name) {
        this.setState(prevState => {
            const list = [];
            prevState.files.map((file, i) => {
                if (file.name !== name) {
                    list.push(file);
                }
            });
            return {
                files: list,
                changedFileIndex: -1,
            };
        });
    }

    render() {
        return (
            <div className="Browse">
                <label>Insert DNA Files:</label>
                <input type="file" multiple="multiple" id="file" ref={this.fileUploaderRef} onChange={this.fileUpload}/>
                <table className="filesName">
                    <tbody>
                    {
                        this.state.files.map((file, i) =>
                            <tr key={i}>
                                <th style={{textAlign: "left"}}>{file.name} :</th>
                                <th>
                                    <button type="file" onClick={() => this.Change(i)}>Change</button>
                                </th>
                                <th>
                                    <button onClick={() => this.Delete(file.name)}>Delete</button>
                                </th>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={() => this.readAllFiles(this.state.files)}>Check</button>
            </div>
        );
    }
}