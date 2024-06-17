// Include React and ReactDOM via CDN in your HTML or install via npm for a more complex setup
const e = React.createElement;

class HelloWorld extends React.Component {
    render() {
        return e('div', null, 'Hello, React!');
    }
}

ReactDOM.render(e(HelloWorld), document.getElementById('react-root'));
