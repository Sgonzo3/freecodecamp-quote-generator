import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div className="App">
        <header>
          <h1>Random Quote Generator</h1>
        </header>
        <main>
          <QuoteBox/>
        </main>
        <footer>
          <p>Made by <a href="https://sgonzo3.github.io">Santos Gonzalez</a></p>
        </footer>
      </div>
    )
  }
}

export default App;
