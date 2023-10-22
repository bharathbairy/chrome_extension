// Function to fetch and display a joke
function fetchAndDisplayJoke() {
    fetch('https://icanhazdadjoke.com/slack') // API source icanhazdadjoke.com
        .then(response => response.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('para');
            jokeElement.innerHTML = jokeText;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Initial joke display
fetchAndDisplayJoke();

// Event listener for the button click
var button = document.getElementById('bttn');
button.addEventListener("click", fetchAndDisplayJoke);
