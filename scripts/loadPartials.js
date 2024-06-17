// Function to load an HTML file and insert its content into the specified element
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching and parsing data:', error);
        });
}

// Load header, footer, and sidebar
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('templates/header.html', 'header-placeholder');
    loadHTML('templates/footer.html', 'footer-placeholder');
    loadHTML('templates/sidebar.html', 'sidebar-placeholder');
});
