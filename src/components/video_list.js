import React from 'react';
import VideoListItem from './video_list_item';

// VideoList takes the property onVideoSelect and it passes to VideoListItem
const VideoList = (props) => {
    console.log("Props:", props);
    const videoItems = props.videos.map((video) => {
        // each video always has an etag(a key)
        return <VideoListItem 
            // pass the callback that's inside of props into VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
    });
    
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList;