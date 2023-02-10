from flask import Flask
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_data():
    data = [{"id": 1, "name": "John Dossse"},
            {"id": 2, "name": "Jane Doe"}]
    return jsonify(data)


@app.route('/pessoas')
def get_pessoas():
    data = [{"id": 1, "name": "Lucas"},
            {"id" : 2, "name": "Joao"}]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
