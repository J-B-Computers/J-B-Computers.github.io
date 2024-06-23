// Fetch content from JSON file and update HTML elements
fetch('data/content.json')
    .then(response => response.json())
    .then(data => {
        // Update the HTML elements with data from the JSON file
        document.querySelector('h1').innerText = data.header.title;
        document.querySelector('p').innerText = data.sidebar.content;
        document.querySelector('#dynamic-button').innerText = 'Click Me';
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