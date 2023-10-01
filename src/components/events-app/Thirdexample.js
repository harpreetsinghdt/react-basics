function Third() {
	console.log(`third example: Handling events using separate function declarations 
	With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows:`);
}

const Fourth = () =>
	console.log(`fourth example
Handling events using separate function expressions
Tip: A way to determine if a function is defined as an expression or a declaration is: if it does not start the line with the keyword function, then it’s an expression.

In the following example, you’re assigning an anonymous ES6 arrow function to a const variable – hence, this is a function expression.

You’re then using this const variable’s name to handle the onClick event, so this is an example of handling events using a separate function expression.
`);

export { Third, Fourth };
