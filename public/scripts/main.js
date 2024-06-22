// Fetch content from JSON file and update HTML elements
fetch('public/data/content.json')
    .then(response => response.json())
    .then(data => {
        // Update the HTML elements with data from the JSON file
        document.querySelector('h1').innerText = data.title; // Update the h1 element
        document.querySelector('p').innerText = data.description; // Update the p element
        document.querySelector('#dynamic-button').innerText = data.buttonText; // Update the button text
    });

// Additional JavaScript function to display a message
function displayMessage() {
    alert('Hello, World!');
}

// Event listener for button click after the DOM content is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the button with id 'dynamic-button'
    document.querySelector('#dynamic-button').addEventListener('click', displayMessage);
});

/* Add this to main.css */

.dashboard {
    padding: 20px;
    background-color: #f4f4f4;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.dashboard ul {
    list-style-type: none;
    padding: 0;
}

.dashboard ul li {
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}