// Fetch content from JSON file and update HTML elements
fetch('data/content.json')
    .then(response => response.json()) // Parse the JSON data from the response
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