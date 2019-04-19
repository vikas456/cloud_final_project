import os
import time
import io
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

from flask import request
from flask import Flask, render_template, send_file, make_response

from sklearn import metrics
from sklearn.cluster import KMeans
from sklearn.cluster import DBSCAN
from sklearn.datasets import load_digits
from sklearn.decomposition import PCA
from sklearn.preprocessing import scale
from sklearn.datasets.samples_generator import make_blobs
from sklearn.preprocessing import StandardScaler


app = Flask(__name__)
CORS(app)


def dbscan_plot():
    # cluster the data into five clusters
    X, y = make_blobs(random_state=170, n_samples=600, centers = 5)
    rng = np.random.RandomState(74)
    # transform the data to be stretched
    transformation = rng.normal(size=(2, 2))
    X = np.dot(X, transformation)
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # cluster the data into five clusters
    dbscan = DBSCAN(eps=0.123, min_samples = 2)
    clusters = dbscan.fit_predict(X_scaled)
    # plot the cluster assignments
    plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap="plasma")
    plt.title('DBSCAN')
    plt.xlabel("Feature 0")
    plt.ylabel("Feature 1")

    #save as bytes object
    bytes_image = io.BytesIO()
    plt.savefig(bytes_image, format='png')
    bytes_image.seek(0)
    return bytes_image

def kmeans_plot():
    # cluster the data into five clusters
    X, y = make_blobs(random_state=170, n_samples=600, centers = 5)
    rng = np.random.RandomState(74)
    # transform the data to be stretched
    transformation = rng.normal(size=(2, 2))
    X = np.dot(X, transformation)
    kmeans = KMeans(n_clusters=5)
    kmeans.fit(X)
    y_pred = kmeans.predict(X)
    # plot the cluster assignments and cluster centers
    plt.scatter(X[:, 0], X[:, 1], c=y_pred, cmap="plasma")
    plt.scatter(kmeans.cluster_centers_[:, 0],
                kmeans.cluster_centers_[:, 1],
                marker='^',
                c=[0, 1, 2, 3, 4],
                s=100,
                linewidth=2,
                cmap="plasma")
    plt.title('KMEANS')
    plt.xlabel("Feature 0")
    plt.ylabel("Feature 1")

    #save as bytes object
    bytes_image = io.BytesIO()
    plt.savefig(bytes_image, format='png')
    bytes_image.seek(0)
    return bytes_image

@app.route('/kmeans', methods=['GET'])
def kmeans():
    bytes_obj = kmeans_plot()
    return send_file(bytes_obj,
                     attachment_filename='plot.png',
                     mimetype='image/png')

@app.route('/dbscan', methods=['GET'])
def dbscan():
    bytes_obj = dbscan_plot()
    return send_file(bytes_obj,
                     attachment_filename='plot.png',
                     mimetype='image/png')

@app.route('/compare', methods=['GET'])
def get_plot():
    return

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
