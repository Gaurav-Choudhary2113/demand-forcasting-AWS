from flask import Flask, send_from_directory, request, jsonify
from datetime import datetime
from PIL import Image
from pathlib import Path
import numpy as np
import os

from recommendation.feature_extractor import FeatureExtractor

# Initialize Flask app
app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')

# Initialize FeatureExtractor
fe = FeatureExtractor()

# Read precomputed features
features = []
img_paths = []
feature_dir = Path("./static/feature")
img_dir = Path("./static/img")

for feature_path in feature_dir.glob("*.npy"):
    features.append(np.load(feature_path))
    img_paths.append(img_dir / (feature_path.stem + ".jpg"))
features = np.array(features)

# Routes
@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/model', methods=['POST'])
def model():
    if 'query_img' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['query_img']
    img = Image.open(file.stream)

    # Save query image
    uploaded_img_path = f"./static/uploaded/{datetime.now().isoformat().replace(':', '.')}_{file.filename}"
    img.save(uploaded_img_path)

    # Extract features from the uploaded image
    query_features = fe.extract(img)

    # Calculate distances and retrieve top 10 matches
    dists = np.linalg.norm(features - query_features, axis=1)
    ids = np.argsort(dists)[:10]
    results = [
        {"score": float(dists[id]), "path": str(img_paths[id])}
        for id in ids
    ]

    return jsonify({
        "query_path": uploaded_img_path,
        "results": results
    })

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

# Offline feature extraction endpoint (optional)
@app.route('/extract-features', methods=['POST'])
def extract_features():
    if not os.path.exists(feature_dir):
        os.makedirs(feature_dir)
    for img_path in img_dir.glob("*.jpg"):
        feature = fe.extract(img=Image.open(img_path))
        feature_path = feature_dir / (img_path.stem + ".npy")
        np.save(feature_path, feature)
    return jsonify({"message": "Features extracted successfully!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
