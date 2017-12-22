import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // import the component from search_bar.js
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDfyiymG6qCLhbUeYTHJLdt527JFvGc5dU'; // youtube API key

// Give the user the ability to click on another video and see it pop up on the screen
// # - add the concept of a selected video to the app component state
// # - the selected video will be a video object and it will be always passed into VideoDetail
// # - to update the selected video, pass a callback from App into VideoList and then from VideoList into VideoListItem
// # - whenever the VideoListItem is clicked it will run a callback with the video that belongs to it

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'grey cats'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {  
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    // this function updates App state with a new video
                    // if VideoList calls onVideoSelect function with a video, the selected video on app is going to update
                    // basically we pass a function that manipulates another component
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} />
            </div>
        );
    }
}



// Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));




