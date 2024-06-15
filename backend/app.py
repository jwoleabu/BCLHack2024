from flask import Flask
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
@cross_origin(origin="http://localhost:3000/")
def postcode(postcode):
    headers = {
        'Authorization': f'Bearer {os.getenv("ELECTORAL_COMMISSION_TOKEN")}'
    }
    url = f'https://api.electoralcommission.org.uk/api/v1/postcode/{postcode}'
    req = re.get(url, headers=headers)
    return req.json()

if __name__ == '__main__':
    app.run(debug=True)
