// Fetch content from JSON file and update HTML elements
fetch('data/content.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('h1').innerText = data.title;
        document.querySelector('p').innerText = data.description;
        document.querySelector('#dynamic-button').innerText = data.buttonText;
    });

// Additional JavaScript function
function displayMessage() {
    alert('Hello, World!');
}

// Event listener for button click
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#dynamic-button').addEventListener('click', displayMessage);
});