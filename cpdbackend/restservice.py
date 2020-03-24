from flask import Flask, request
from flask_cors import CORS
from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET'])
def index():
    return "Welcome to CPD Engine"


@app.route("/projectlist/", methods=['GET'])
def getprojects():

    connection = None
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="Liambrennan1*",
                                      host="127.0.0.1",
                                      port="5432",
                                      database="cpd")

        cursor = connection.cursor(cursor_factory=RealDictCursor)

        my_query = "select * from projects"
        cursor.execute(my_query)

        project_details = cursor.fetchall()
        return jsonify(project_details)
    except(Exception, psycopg2.Error) as error:
        print("Error while fetching information", error)

    finally:
        # closing database connection.
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")


@app.route("/new", methods=['POST', 'OPTIONS'])
def addproject():
    print("Got to here. In add")

    new_project = {
        'project_id': request.json['project_id'],
        'project_name': request.json['project_name'],
        'project_manager': request.json['project_manager'],
    }

    connection = None
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="Liambrennan1*",
                                      host="127.0.0.1",
                                      port="5432",
                                      database="cpd")

        cursor = connection.cursor()

        my_query = "INSERT INTO projects(project_id, project_name, project_manager) " \
                   "VALUES (%(project_id)s, %(project_name)s, %(project_manager)s)"
        cursor.execute(my_query, new_project)

        connection.commit()

        message = "project added"
        return jsonify(message, 201)

    except(Exception, psycopg2.Error) as error:
        print("Error while fetching information", error)

    finally:
        # closing database connection.
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")


if __name__ == '__main__':
    app.run(debug=True)



