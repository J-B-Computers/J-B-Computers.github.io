// Include React and ReactDOM via CDN in your HTML or install via npm for a more complex setup
const e = React.createElement;

// Define a React component
class HelloWorld extends React.Component {
    render() {
        // Render a div with the text 'Hello, React!'
        return e('div', null, 'Hello, React!');
    }
}

// Render the React component inside the element with id 'react-root'
ReactDOM.render(e(HelloWorld), document.getElementById('react-root'));