import { useState } from 'react';
import RegisterForm from './Register';
import TextInputWithFocusButton from './Refhook';

export default function InputComponent() {
	const [inputText, setText] = useState('Hello there');

	// function handleChange(e){
	// 	setText(e.target.value);
	// }

	return (
		<>
			<h1>User input:</h1>
			<h3>const [inputText, setText] = useState('Hello there');</h3>
			<input value={inputText} onChange={(e) => setText(e.target.value)} />
			<p>You typed: {inputText}</p>
			<button onClick={() => setText('Hello there')}>Reset</button>
			<h1>Register User form:</h1>
			
			
			<RegisterForm />

			<h1>useRef hook use case:</h1>
			<TextInputWithFocusButton />
		</>
	);
}
