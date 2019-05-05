
import Splash from"./Splash.js";
import { withStyles } from "@material-ui/core/styles";
import './Home.css';
import { Redirect } from 'react-router-dom';
import React, {Component} from 'react';


const styles = {
  root: {
    backgroundColor: "#ffffff"
  },
};

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root" style={styles.root}>
        <Splash/>
        <div>
        </div>
      </div>
    );
  }

}

export default Home;
