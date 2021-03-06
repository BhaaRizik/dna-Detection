import React from 'react'
import '../index.css'
// import './dna.css';
import axios from 'axios'

export default class Browse extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      files: [],
      changedFileIndex: -1,
      fileReader: null
    }
    this.fileUploaderRef = React.createRef()
  }

  downloadTxtFile = dna_results => {
    console.log('downloadTxtFile - ' + dna_results)
    const element = document.createElement('a')
    const file = new Blob([dna_results], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'Microbe detection by PCR - Results.txt'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  handleFileChosen = async file => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader()
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = reject
      fileReader.readAsText(file)
    })
  }
  delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  readAllFiles = async AllFiles => {
    const results = await Promise.all(
      AllFiles.map(async file => {
        const fileContents = await this.handleFileChosen(file)
        console.log(':+' + fileContents)

        return fileContents
      })
    )
    console.log(results)
    let postR = []

    results.map(async result => {
      // const response = await Promise.axios.post(
      postR.push(
        axios.post(
          'http://52.14.247.16:5000/process',
          { result },
          { headers: { 'Content-Type': 'application/json' } }
        )
      )
    })
    Promise.all(postR).then(res => {
      console.log(res)
      this.getRequest()
    })

    console.log('minLen = ' + this.props.minLen)
    console.log('maxLen = ' + this.props.maxLen)
    console.log('maxDis = ' + this.props.maxDistance)
    console.log('maxDis = ' + this.props.minDistance)
    console.log('microbe = ' + this.props.MicrobeType)
    console.log('file number = ' + this.state.files.length)

    console.log(
      this.props.maxLen +
        '+' +
        this.props.minLen +
        '+' +
        this.props.maxDistance +
        '+' +
        this.props.minDistance +
        '+' +
        this.props.MicrobeType
    )

    return results
  }

  getRequest = async () => {
    axios
      .get(
        'http://52.14.247.16:5000/start/' +
          this.props.maxLen +
          '+' +
          this.props.minLen +
          '+' +
          this.props.maxDistance +
          '+' +
          this.props.minDistance +
          '+' +
          this.props.MicrobeType +
          '+' +
          this.state.files.length
      )
      .then(response => {
        console.log(response.data)
        //alert(response.data.value);
        console.log(response.data.value)
        // document.getElementById("output").innerHTML =response.data.value;

        this.downloadTxtFile(response.data.value)
      })
      .catch(function (error) {
        console.log(error)
        alert('Problem at the server\nTry later\n' + error)
      })
  }

  fileUpload = e => {
    let changedFile = e.target.files[0]
    let uploadedFiles = e.target.files

    if (this.state.changedFileIndex >= 0) {
      this.setState(prevState => {
        const list = []
        prevState.files.map((file, i) => {
          if (i === prevState.changedFileIndex) list.push(changedFile)
          else list.push(file)
        })
        return {
          files: list,
          changedFileIndex: -1
        }
      })
    } else if (this.state.files.length > 0) {
      this.setState(prevState => {
        return { files: [...prevState.files, ...uploadedFiles] }
      })
    } else this.setState({ files: [...e.target.files] })
  }

  Change (index, file) {
    console.log('Change Function')
    this.setState({ changedFileIndex: index })
    this.fileUploaderRef.current.click()
  }

  Delete (name) {
    this.setState(prevState => {
      const list = []
      prevState.files.map((file, i) => {
        if (file.name !== name) {
          list.push(file)
        }
      })
      return {
        files: list,
        changedFileIndex: -1
      }
    })
  }

  render () {
    return (
      <div className='Browse'>
        <label>Insert DNA Files:</label>

        <input
          type='file'
          multiple='multiple'
          id='file'
          ref={this.fileUploaderRef}
          onChange={this.fileUpload}
        />
        <table className='filesName'>
          <tbody>
            {this.state.files.map((file, i) => (
              <tr key={i}>
                <th style={{ textAlign: 'left' }}>{file.name} :</th>
                <th>
                  <button type='file' onClick={() => this.Change(i)}>
                    Change
                  </button>
                </th>
                <th>
                  <button onClick={() => this.Delete(file.name)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => this.readAllFiles(this.state.files)} id='check'>
          Check
        </button>
      </div>
    )
  }
}
