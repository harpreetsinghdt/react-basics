import React from 'react';
import ReactPlayer from 'react-player';

const App = () => {
	return (
		<div>
			<MyVideo />
		</div>
	);
};

const MyVideo = () => {
	// const url = 'https://fb.watch/npq_Kop8oo/';
	const url =
		'https://www.facebook.com/FacebookDevelopers/videos/10152454700553553/';
	return <ReactPlayer height={50} url={url} />;
};

export default App;
