from flask import render_template, request
from app import app

# ROUTING/VIEW FUNCTIONS
@app.route('/')

@app.route('/index')
def index():
    # Renders index.html.
    return render_template('index.html')

# @app.route('/output')
# def cities_output():
# 	return render_template('output.html')

@app.route('/author')
def author():
    # Renders author.html.
    return render_template('author.html')

@app.route('/output',methods=["POST"])
def cities_output():
	# get the query (city name)
	city_name = request.form['cities']
	return render_template('output.html',city_name=city_name)

@app.route('/about')
def about():
    return render_template("about.html")	
