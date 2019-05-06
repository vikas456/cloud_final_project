import React, {Component} from 'react';
import pic1 from './img/dbscan.png'
import pic2 from './img/kmeans.png'

class Compare extends Component{

    render() {
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <div class="container"> 
                    <h2>DBSCAN plot</h2>
                    <img src={pic1} alt="" />
                    <br></br>
                    <br></br>
                    <h2>K-MEANS plot</h2>
                    <img src={pic2} alt="" />


                </div>
            </div>
        )};

}

export default Compare;
