let mode = true;
let theme = mode ? 'Dark Theme' : 'Light Theme';
function handleClick(){
	mode = !mode;
	mode ? console.log('Dark Theme') : console.log('Light Theme');
	// theme = mode ? 'Dark Theme' : 'Light Theme';
}
function ModeToggler(){
	return (
		<>
			<h1>{theme}</h1>
			<button onClick={handleClick}>Change Theme</button>
		</>
	)
}

export default ModeToggler;