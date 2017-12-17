import React from 'react';
import ReactDOM from 'react-dom';

// youtube API key
const API_KEY = 'AIzaSyDfyiymG6qCLhbUeYTHJLdt527JFvGc5dU';

// Create a new component. This component should produce some HTML
const App = () => <div>Hi ho!</div>;


// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));




