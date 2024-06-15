from flask import Flask
import sqlite3
from flask_cors import cross_origin

app = Flask(__name__)
@app.route('/', methods=['GET'])
@cross_origin("http://localhost:3000/")
def home():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)