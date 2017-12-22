import React from 'react';

const VideoDetail = ({video}) => {
	// if no video has been provided, return a div with the message 'Loading...'
	// else render a video and its details on the page
	if(!video) {
		return <div>Loading...</div>;
	}

    const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

    return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
  );
};


export default VideoDetail;