import React from "react";
import brain from "./img/brain1.png";
import { withStyles } from "@material-ui/core/styles";
import posed from 'react-pose';

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "0vh"
    },
    image: {
      width: "100%",
    },
    text: {
      fontSize: "5vw",
      color: "#ffffff",
      fontFamily: 'Questrial',
      marginTop: "10vh",
      marginBottom: "10vh"
    },
    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "column"
    }
};
const Text = posed.div({
   visible: { 
     opacity: 1,
     transition: { 
       ease: "easeIn",
       duration: 1500,
     }
   },
   hidden: { opacity: 0 },  
});

class Splash extends React.Component {
  state = { 
    isHeaderVisible: false,
    isButtonVisible: false
  };

  componentDidMount() {
    this.setState({ 
      isHeaderVisible: true,
      isButtonVisible: true
    });
  }

  render() {
    const { classes, handlerFunction } = this.props;
    const { isHeaderVisible, isButtonVisible } = this.state;
    return (
      <div className={classes.container}>
        <img className={classes.image} src={brain} height="75%" alt=""/>
        <div className={classes.content}>
            <Text 
                className={classes.text}
                pose={this.state.isHeaderVisible ? 'visible' : 'hidden'}
            >Lets learn MLDS
            </Text>
         </div>
      </div>
    );
  }
}

export default withStyles(styles)(Splash);
