import React from 'react';
import logo from './logo.svg';
import './App.css';

function App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { content: "" }
  }

  componentDidMount () {
    console.log('Component did mount')
    fetch('http://localhost:3001')
      .then(async (response) => {
        console.log('Received response from the server')
        console.log(response)
        let obj = await response.json()
        console.log('Processed response as JSON: ' + obj)
        this.setState({content:obj.b})
      })
  }
}

export default App;
