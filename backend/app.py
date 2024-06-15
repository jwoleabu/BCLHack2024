from flask import Flask, jsonify
import requests as re
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
@cross_origin(origin="http://localhost:5173/")
def home():
    return "Hello World"


@app.route('/postcode/<postcode>', methods=['GET'])
@cross_origin(origin="http://localhost:5173/")
def postcode(postcode):
    url = f'https://developers.democracyclub.org.uk/api/v1/postcode/{postcode}?auth_token={os.getenv("DEMOCRACY_CLUB_TOKEN")}'
    req = re.get(url)
    data = req.json()
    registration = data.get('registration', {})

    candidates = data['dates'][0]['ballots'][0]['candidates']
    candidates_info = []
    for candidate in candidates:
        candidate_info = {
            "name": candidate["person"]["name"],
            "party": candidate["party"]["party_name"],
            "email": candidate["person"]["email"],
            "absolute_url": candidate["person"]["absolute_url"],
            "photo_url": candidate["person"]["photo_url"]
        }
        candidates_info.append(candidate_info)

    response = {'registration': registration, 'candidates': candidates_info}
    return jsonify(response)
    

## Returns the registration information for a given postcode
@app.route('/postcode/<postcode>', methods=['GET'])
def postcode(postcode):
    headers = {
        'Authorization': f'Bearer {os.getenv("ELECTORAL_COMMISSION_TOKEN")}'
    }
    url = f'https://api.electoralcommission.org.uk/api/v1/postcode/{postcode}'
    req = re.get(url, headers=headers)
    data = req.json()
    registration = data.get('registration', {})
    response = {'registration': registration}
    return jsonify(response)


## Returns the candidates for a given postcode with their information
@app.route('/postcode/<postcode>/candidates', methods=['GET'])
@cross_origin(origin="http://localhost:5173/")
def candidates(postcode):
    url = f'https://developers.democracyclub.org.uk/api/v1/postcode/{postcode}?auth_token={os.getenv("DEMOCRACY_CLUB_TOKEN")}'
    req = re.get(url)
    data = req.json()
    
    candidates = data['dates'][0]['ballots'][0]['candidates']
    candidates_info = []
    for candidate in candidates:
        candidate_info = {
            "name": candidate["person"]["name"],
            "party": candidate["party"]["party_name"],
            "email": candidate["person"]["email"],
            "absolute_url": candidate["person"]["absolute_url"],
            "photo_url": candidate["person"]["photo_url"]
        }
        candidates_info.append(candidate_info)
    return jsonify(candidates_info)


if __name__ == '__main__':
    app.run(debug=True)
