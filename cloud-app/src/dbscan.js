import React, {Component} from 'react';
import "./kmeans.css"
import pic1 from './img/dbscan1.png'
import pic2 from './img/dbscan2.png'
import pic3 from './img/dbscan3.png'
import pic4 from './img/dbscan4.png'

class Dbscan extends Component{

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
                    <h4>DBSCAN</h4>
                    <p>
                        DBSCAN, density-based spatial clustering of appliation with noise, is a clustering analysis that
                        groups together points that are close together. This algorithm, as the name suggests, works regardless
                        of outliers or noise data. Under the hood, the algorithsm categorizes the points in 3 groups: core, border,
                        and noise. These groups are defined by the provided EPS and MinPts. EPS is a radius and MinPts is the minimum
                        number of points found within the radius. If a point has MinPts within its EPS, it is considered a core point.
                        A point is considered "border" if it falls within the EPS of a "core" point. A "noise" point is one that doesn't
                        satisfy the other criteria.

                    </p> 
                    <p>
                        Lets dive into the python code that uses dbscan algorithm in Scikit-learn library.
                    </p> 
                    <img className="image" src={pic1}  alt=""/>
                    <p>
                        The above code snippet uses a simple "make_blobs" method from scikit-learn library to create
                        a test dataset. For this example, we create a dataset that has a known 5 clusters (center=5).
                    </p>
                    <img src={pic2} className="image" alt=""/>
                    <p>
                        After creating the dataset (which in your case, you will have an actual dataset), we need to 
                        transform the data to ensure that it will work with the DBSCAN algorithm. The important part is
                        to use the StandardScalar object. This object has a function, fit_transform, that fits the dataset
                        and transforms it. It returns the transformed dataset. 
                    </p>
                    <img src={pic3} className="image" alt=""/>
                    <p>
                        Now, we are finally using the DBSCAN method. First, we create an DBSCAN object. We provide the 
                        constructor the EPS and MinPts (which is min_samples). After trial and error, 
                        in our example we used 0.123 as EPS and 2 for min_samples. Using the DBSCAN.fit_predict method, we 
                        pass the scaled dataset.
                        At this point, the algorithm has done its work and predicted the clusters. However, we still need 
                        to visualize these clusters. 
                    </p>
                    <img src={pic4} className="image" alt=""/>
                    <p>
                        In order to create a visual, such as a simple cartesian plane, we use matplotlib library. The 
                        matplotlib object is called "plt". We use the given methods, such as scatter, to create a scatter plot.
                        We pass the cluster (which is the predicted clusters) to this method. Matplotlib is intuitive to use 
                        different colors for each of the clusters. We create the titles and labels in the last three steps. 
                    </p>

                </div>
                <br></br>
                <br></br>
                <br></br>



            </div>

        );
    }
    




}

export default Dbscan;
