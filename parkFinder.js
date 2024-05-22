//RGCkey = AIzaSyD3Adj8GwPMcfbzPCAbbwezdW_d1q4jMdE
/*
Used googles geolocator to reverse the coordinants given by geolocation. So when the user accepts that the website to 
use their location, it takes in their current location in coordainants. These coordinants are then transformed into an 
address using googles geolocation API. 
*/
document.addEventListener('DOMContentLoaded', (event) => {
    var findStateButton = document.getElementById('find-state');
    if (findStateButton) {
      findStateButton.addEventListener('click', function() {
        findParks();
      });
    } else {
      console.error('Button not found');
    }
  });
  
  function findParks() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
  
    console.log(`Latitude: ${lat}, Longitude: ${long}`);
  
    reverseGeocode(lat, long);
  }
  
  function error() {
    alert("Unable to retrieve your location.");
  }
  
  function reverseGeocode(lat, long) {
    const apiKey = 'AIzaSyD3Adj8GwPMcfbzPCAbbwezdW_d1q4jMdE';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          const address = data.results[0].formatted_address;
          console.log(`Address: ${address}`);
  
          const city = data.results[0].address_components.find(component => component.types.includes('locality')).long_name;
          
          // shows all the events that are regarding the city that you are currently located in
          window.location.href = `/parkList?city=${city}`;
        } else {
          console.error('Geocoding failed: ' + data.status);
        }
      })
      .catch(error => console.error('Error:', error));
  }
  