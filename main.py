from flask import Flask
from flask.ext.mongoalchemy import MongoAlchemy


app = Flask(__name__)

app.config['MONGOALCHEMY_DATABASE'] = 'test2'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://<test>:<test>@ds239965.mlab.com:39965/test2'

db = MongoAlchemy(app)

class Example(db.Document):
    name = db.StringField()

@app.route('/')
def index():
    return 'This is the homepage'

@app.route('/test')
def test():
    return "this is the test route"

if __name__ == "__main__":
    app.run(debug=True)





#
# from pymongo import MongoClient
# import pprint
#
# client = MongoClient('mongodb://127.0.0.1:27017')
#
# colecunningham = {"name": "Cole Cunningham", "position": "screenprinter", "email": "gdylanc@yahoo.com", "hiredate": "12/12/12"}
#
# db=client.test1
# db.people.insert(colecunningham)
#
# for a in db.people.find():
#     pprint.pprint(a)