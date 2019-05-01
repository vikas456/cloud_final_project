import React, { Component } from 'react';
import './Navbar.css';
import Home from './Home.js';
import Logo from "./img/logo.png"
import {Navbar, Nav} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'



// import { Link } from "react-router-dom";


class Navbar2 extends Component {

  constructor(props) {
      super(props);

      this.state = {
      };
          
  }

    isActivePage(url) {
        var wlp = window.location.pathname;
        if(wlp === url){
            return "active";
        }
        return "";
    }

    handle = (resp) => {
      this.setState( {
          results: resp
      });
    }

    handleEvents = (resp) => {
      this.setState( {
          resultsEvents: resp
      });
    }

    handleTypes = (resp) => {
      this.setState( {
          resultsTypes: resp
      });
    }

    handleGroups = (resp) => {
      this.setState( {
          resultsGroups: resp
      });
    }

	render () {
        console.log (Logo)
		return(
        <div class="container">
            <Navbar className={this.state.navClass} fixed="top" bg="white" variant="light" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <IndexLinkContainer to="/">
                <Navbar.Brand>
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt= { Logo }></img>
                    Learn MLDS
                </Navbar.Brand>
            </IndexLinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={1} className="ml-auto">
                <Nav.Item>
                    <IndexLinkContainer to="/"><Nav.Link>Home</Nav.Link></IndexLinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/dbscan"><Nav.Link>DBSCAN</Nav.Link></LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/kmeans"><Nav.Link>KMEANS</Nav.Link></LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/compare"><Nav.Link>Compare</Nav.Link></LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/About"><Nav.Link>About</Nav.Link></LinkContainer>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        
        </div>
       
			);
	}
}
export default Navbar2;

