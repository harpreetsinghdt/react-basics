import { useRef } from "react";

function TextInputWithFocusButton(){
	const inputEle = useRef(null);
	const handleClick = () => {
		inputEle.current.focus();
	};

	return(
		<>
		<input ref={inputEle} type="text" />
		<button onClick={handleClick}>Focus the input</button>
		</>
	)
}

export default TextInputWithFocusButton;