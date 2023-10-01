import FnOnClick from './FnOnClick';
import ComOnMouseOver from './ComOnMouseOver';
import { Third, Fourth } from './Thirdexample';

function Main() {
	return (
		<>
			<button onClick={FnOnClick}>Click Me</button>
			<br></br>
			<button onMouseOver={ComOnMouseOver}>Hover me</button>
			<br></br>
			<button onClick={Third}>Click me I am third</button>
			<br></br>
			<button onClick={Fourth}>Click me Fourth here</button>
		</>
	);
}

export default Main;
