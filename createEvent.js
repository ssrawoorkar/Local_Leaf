// listens for when the submit button is pressed
document.getElementById('createEventForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    // retrieves the entered values
    const eventName = document.getElementById('eventName').value;
    const parkName = document.getElementById('parkName').value;
    const city = document.getElementById('city').value;

    fetch('/createEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eventName, parkName, city })//convert to json string because I was getting a handlebars error that wasnt letting me send data so I just turned it into a string
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
});
