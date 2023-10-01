function Main(){

	function handleClick(){
		let randomNum = Math.ceil(Math.random() * 3);
		console.log(randomNum);
		let userInput = prompt('Enter a number');
		alert(`Actual number: ${randomNum}, Your guess: ${userInput} `);
	}

	return (
		<div>
			<h1>Task: Add a button and handle a click event</h1>
			<button onClick={handleClick}>Guess the number between 1 and 3</button>
		</div>
	);
}

export default Main;