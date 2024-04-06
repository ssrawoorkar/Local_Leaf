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

