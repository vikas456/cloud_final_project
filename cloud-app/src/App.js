import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./navbar.js"
import Dbscan from "./dbscan.js"
import Kmeans from "./kmeans.js"
import Home from "./home.js"
import Compare from "./compare.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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

        <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path ="/dbscan" component ={Dbscan}/>
          <Route path ="/kmeans" component ={Kmeans}/>
          <Route path ="/compare" component ={Compare}/>
          {/* <Footer/> */}
        </div>
      </Router>





      </div>
    );
  }
}

export default App;
