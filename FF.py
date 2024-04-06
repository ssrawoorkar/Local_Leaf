import urllib
from geopy.geocoders import Photon
 
# initialize Photon API
geolocator = Photon(user_agent="geoapiExercises")
 
 
# Latitude & Longitude input
Latitude = "37.7764955"
Longitude = "-122.4505532"
 
location = geolocator.reverse(Latitude+","+Longitude)
 

 
print(location)
#https://www.gps-coordinates.net/my-location

# This is to get the data from the HTML file

from flask import Flask, render_template, request,jsonify

app = Flask(__name__)
@app.route("/")
def home():
	return render_template('FF.html')

@app.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.json  # Get the JSON data sent from JavaScript
    # Access the data sent from JavaScript
    lat = data.get('lat')
    long = data.get('long')
    
    # Process the data further if needed
    print("Latitude:", lat)
    print("Longitude:", long)
    print("SUCCESS\n")
    
    # Return a response (optional)
    return jsonify({"message": "Data received successfully"})
if __name__ == '__main__':
    
    app.run(debug=True, host='127.0.0.1', port=5001)


# This is the chatgpt template

import openai
#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
openai.api_key = "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"
#"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" <-- Old API key might not work

completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Find the 5 nearby parks from" + location}])
print(completion.choices[0].message.content)
top5_parks = completion.choices[0].message.content

