import React, {Component} from 'react';
import "./kmeans.css"

class Kmeans extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <div class="container"> 
                    <h4>K-MEANS</h4>
                    <p>
                        K-means clustering is one of the most commonly used algorithm for unsupervised learning.
                        As the name suggests, the algorithm uses the "mean" distance among the data points to find clusters.
                        Each cluster is associated with a centroid, which is a point that distinguishes the center of that
                        cluster.
                    </p>
                    <p>
                        Lets dive into the python code that uses Scikit-learn library. In this library, specifically 
                        the sklearn-cluter, we are going to use the KMeans 
                    </p> 

                </div>
                



            </div>

        );
    }
    




}

export default Kmeans;
