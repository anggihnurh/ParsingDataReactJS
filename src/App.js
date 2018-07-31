//  STATEFULL 
import React, { Component } from 'react';
import ComponentChild from './components/Child1';   // Import Child1 from folder components
import logo from './logo.svg';
import './App.css';
class App extends Component {  // StateFull, because this is parrent component and can save a data
  state = {  // state is used to save a data and using an object for the value
    key1: "God",    //  key: "Value"
    key2: "Angel",
    key3: "Human"
  }
  render() {  //Function to show the return
    return (  // Return the value in <div> to render 
      //Default  header from ReactJS
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple ReactJS</h1>
          <h2>Parsing data from Parrrent To Child Component</h2>
        </header>
        <h1 style={{ backgroundColor: 'red' }}>Parrent Component Title</h1>
        <ComponentChild    //call ComponentChild (Child1.js)
          var1={this.state.key1}        // this -> to pointing to class App || state -> Choose state in  class App || value1 -> To get the value from key1
          var2={this.state.key2}
          var3={this.state.key3}
        />
      </div >
    )
  }
}

export default App; //To Export class App