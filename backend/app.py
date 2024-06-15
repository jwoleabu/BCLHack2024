from flask import Flask
import requests as re
import sqlite3 

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    req = re.get('https://api.electoralcommission.org.uk/api/v1/postcode/SW1A1AA')
    print(req.json())
    return 'Hello, World!'
