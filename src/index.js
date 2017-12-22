import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // import the component from search_bar.js
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDfyiymG6qCLhbUeYTHJLdt527JFvGc5dU'; // youtube API key


// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'grey cats'}, (videos) => {
            this.setState({ videos: videos });
        });
    }

    //state = { videos: [] };

    render() {  
        // YTSearch({key: API_KEY, term: 'grey cats'}, (videos) => {
        //     this.setState({ videos: videos });
        // });

        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}



// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));




