const e = React.createElement;

class HelloWorld extends React.Component {
    render() {
        return e('div', null, 'Hello, React!');
    }
}

ReactDOM.render(e(HelloWorld), document.getElementById('react-root'));