from flask import Flask, request, jsonify
from flask_cors import CORS
from recommendation import Recommendation

app = Flask(__name__)
CORS(app, supports_credentials=True)

recommendation = Recommendation()

@app.route('/signin', methods=['POST'])
def signin():
    temp=request.json
    x=recommendation.signin(temp['name'])
    if x:
        return jsonify(x)
    return jsonify({"error":"wrong username"})

@app.route('/watched', methods=['POST'])
def watched():
    temp = request.json
    print("Watched Request Data:", temp)  # Debugging output
    if 'user_id' not in temp or 'anime_id' not in temp or 'rating' not in temp:
        return jsonify({"error": "Missing required parameters"}), 400
    recommendation.addWatched(temp['user_id'], temp['anime_id'], int(temp['rating']))
    return 'Anime watched!'

@app.route('/signup', methods=['POST'])
def signup():
    temp = request.json
    print("Signup Request Data:", temp)  # Debugging output
    if 'name' not in temp:
        return jsonify({"error": "Missing required parameters"}), 400
    user = recommendation.addUser(temp['name'])
    print("New User Added:", user)  # Debugging output
    return jsonify(user)

@app.route('/recommend', methods=['POST'])
def recommend():
    temp = request.json
    print("Recommend Request Data:", temp)  # Debugging output
    if 'user_id' not in temp:
        return jsonify({"error": "user_id not found in request"}), 400
    ans = recommendation.recommend(temp['user_id'])
    return jsonify(ans)

@app.route('/search', methods=['POST'])
def search():
    temp = request.json
    print("Search Request Data:", temp)  # Debugging output
    if 'anime_name' not in temp:
        return jsonify({"error": "anime_name not found in request"}), 400
    result = recommendation.search_similar_animes(temp['anime_name'])
    if isinstance(result, str) and result == "Anime not found.":
        return jsonify({"error": result}), 404
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=4000)
