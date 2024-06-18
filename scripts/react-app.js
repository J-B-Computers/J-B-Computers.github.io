const e = React.createElement;
const { createRoot } = ReactDOM;

// Define a React component
class HelloWorld extends React.Component {
    render() {
        // Render a div with the text 'Hello, React!'
        return e('div', null, 'Hello, React!');
    }
}

// Create a root and render the React component inside the element with id 'react-root'
const root = createRoot(document.getElementById('react-root'));
root.render(e(HelloWorld));