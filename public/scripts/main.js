/* Basic styling for the body */
body {
    font-family: Arial, sans-serif; /* Set font family */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    text-align: center; /* Center-align text */
    background-image: url('public/assets/images/background.jpg'); /* Background image */
    background-size: cover; /* Cover the entire background */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent repeating the background image */
  }
  
  /* Styling for the header */
  header {
    background-color: #4CAF50; /* Set background color */
    color: white; /* Set text color */
    padding: 10px 0; /* Set padding */
  }
  
  header h1 {
    margin: 0; /* Remove default margin */
  }
  
  header nav ul {
    list-style: none; /* Remove default list style */
    padding: 0; /* Remove default padding */
  }
  
  header nav ul li {
    display: inline; /* Display list items inline */
    margin: 0 10px; /* Set margin */
  }
  
  header nav ul li a {
    color: white; /* Set text color */
    text-decoration: none; /* Remove underline */
  }
  
  header nav ul li a.active {
    font-weight: bold; /* Bold text for active link */
  }
  
  /* Styling for the sidebar */
  aside {
    background-color: #f4f4f4; /* Set background color */
    padding: 10px; /* Set padding */
    text-align: left; /* Left-align text */
  }
  
  aside h2 {
    margin-top: 0; /* Remove top margin */
  }
  
  /* Styling for the footer */
  footer {
    background-color: #333; /* Set background color */
    color: white; /* Set text color */
    padding: 10px 0; /* Set padding */
    position: absolute; /* Positioning */
    bottom: 0; /* Position at the bottom */
    width: 100%; /* Full width */
  }
  
  /* Basic styling for the main content */
  main {
    padding: 20px; /* Set padding */
  }
  
  /* Styling for the dynamic button */
  #dynamic-button {
    background-color: #4CAF50; /* Set background color */
    color: white; /* Set text color */
    padding: 10px 20px; /* Set padding */
    border: none; /* Remove border */
    border-radius: 5px; /* Set border radius */
    cursor: pointer; /* Set cursor to pointer */
  }
  
  /* Styling for the dynamic button on hover */
  #dynamic-button:hover {
    background-color: #3d8b40; /* Set background color on hover */
  }