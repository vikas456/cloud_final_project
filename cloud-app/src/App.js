import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./Navbar.js"
import Dbscan from "./dbscan.js"
import Kmeans from "./kmeans.js"
import Home from "./Home.js"
import Compare from "./compare.js"

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path ="/kmeans" component ={Kmeans}/>
          {/* <Route path ="/dbscan" component ={Dbscan}/>
          <Route path ="/kmeans" component ={Kmeans}/>
          <Route path ="/compare" component ={Compare}/> */}
          {/* <Footer/> */}
        </div>
      </Router>

    );
  }
}

export default App;
