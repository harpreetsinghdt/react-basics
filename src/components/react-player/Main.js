import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Facebook from './Facebook';

const App = () => {
	return (
		<div>
			<MyVideo />
			<br></br>
			<Facebook />
		</div>
	);
};

const MyVideo = () => {
	return (
		<ReactPlayer
			url='https://www.youtube.com/watch?v=MfIoAG3e7p4&t=5s'
			controls={true}
		/>
	);
};

export default App;
