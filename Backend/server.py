from flask import Flask, send_from_directory, request
import os
import numpy as np
from PIL import Image
from recommendation.feature_extractor import FeatureExtractor
from datetime import datetime
from pathlib import Path

# Initialize Flask app
app = Flask(__name__, static_folder='../Frontend/dist', static_url_path='')

# Static file routing for frontend
@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/modelPage')
def model():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# Route to serve files from `uploaded` folder
@app.route('/recommendation/static/uploaded/<path:filename>')
def serve_uploaded(filename):
    return send_from_directory('recommendation/static/uploaded', filename)

# Route to serve files from `img` folder
@app.route('/recommendation/static/img/<path:filename>')
def serve_img(filename):
    return send_from_directory('recommendation/static/img', filename)

# Recommendation system logic
fe = FeatureExtractor()
features = []
img_paths = []
for feature_path in Path("./recommendation/static/feature").glob("*.npy"):
    features.append(np.load(feature_path))
    img_paths.append(Path("./recommendation/static/img") / (feature_path.stem + ".jpg"))
features = np.array(features)

@app.route('/api/recommend', methods=['POST'])
def recommend():
    if 'query_img' not in request.files:
        return {"error": "No image uploaded"}, 400

    file = request.files['query_img']

    # Save query image
    img = Image.open(file.stream)
    uploaded_img_path = f"recommendation/static/uploaded/{datetime.now().isoformat().replace(':', '.')}_{file.filename}"
    img.save(uploaded_img_path)

    # Extract features and find recommendations
    query = fe.extract(img)
    dists = np.linalg.norm(features - query, axis=1)
    ids = np.argsort(dists)[:6]
    scores = [
        {
            "score": float(dists[id]),
            "path": f"/recommendation/static/img/{img_paths[id].name}"
        }
        for id in ids
    ]

    return {
        "query_path": f"/recommendation/static/uploaded/{os.path.basename(uploaded_img_path)}",
        "results": scores
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
