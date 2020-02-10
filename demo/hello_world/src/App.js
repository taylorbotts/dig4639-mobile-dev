import React from 'react';
import logo from './logo.svg';
import './App.css';

function Name(props){
  return <p>My name is {props.name}</p>
}

class App extends React.Component {
  clickHandler = ()=>{
    alert(`since this is an arrow function, 
          this is bound to App, and not the div where it is being called `);
    console.log(this);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div onClick={this.clickHandler}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            hello world
            <Name name="taylor"/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
