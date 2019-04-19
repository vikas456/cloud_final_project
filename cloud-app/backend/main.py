import os
import time

from flask import request
from flask import Flask, render_template


app = Flask(__name__)
CORS(app)


def dbscan_plot():
    return


def kmeans_plot():
    return



@app.route('/compare', methods=['GET'])
def get_plot():
    return



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)