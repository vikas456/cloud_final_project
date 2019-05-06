import React, {Component} from 'react';
import "./kmeans.css"
import pic1 from './img/kmeans1.png'
import pic2 from './img/kmeans2.png'
import pic3 from './img/kmeans3.png'
import pic4 from './img/kmeans4.png'

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
                    <img className="image" src={pic1}  alt=""/>
                    <p>
                        The above code snippet uses a simple "make_blobs" method from scikit-learn library to create
                        a test dataset. For this example, we create a dataset that has a known 5 clusters (center=5).
                    </p>
                    <img className="image" src={pic2}  alt=""/>
                    <p>
                        After creating the dataset (which in your case, you will have an actual dataset), we need to 
                        transform the data to ensure that it will work with the K-MEANS algorithm. We want to normalize the 
                        dataset. This is important because the kmeans uses the average distance between points. The distance is
                        calculated using Euclidean metrics. Hence, we need to normalize the dataset. 
                    </p>
                    <img className="image" src={pic3}  alt=""/>
                    <p>
                        We use the K-MEANS algorithm from scikit-learn. In order to create the K-MEANS object, we need to 
                        specify the number of clusters. This is critical. To make use of this algorithm, the user needs 
                        significant domain knowledge of the unlabeled dataset. For instance, if the dataset consists of 
                        types of dog breeds, the developer should know how many possible dog breeds are within the dataset.
                        In our case, we created the dataset to have 5 clusters, thus we specify 5 in the explicit parameter.
                        After creating the object, we use the .predict function to predict the clusters.
                    </p>
                    <img className="image" src={pic4}  alt=""/>
                    <p>
                        Lastly, we use matplotlib to plot the data points and use color to depict the predict clusters.
                        We use the .scatter method twice because we want to plot the data points and the calculated centroids.
                        The first scatter methods plots all the datapoints, whereas the second one plots the centroids
                    </p>

                </div>
                



            </div>

        );
    }
    




}

export default Kmeans;
