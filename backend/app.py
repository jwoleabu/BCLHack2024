from flask import Flask
import sqlite3 

app = Flask(__name__)
@app.route('/', methods=['GET'])
@cross_origin("http://localhost:3000/")
def home():
    req = re.get('https://api.electoralcommission.org.uk/api/v1/postcode/SW1A1AA')
    print(req.json())
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
    