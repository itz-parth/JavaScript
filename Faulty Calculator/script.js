/*
Create a faulty calculator using JavaScript

This faulty calculator does the following:
1. It takes two numbers as input from user.
2. It performs wrong operations as follow:
   + ----> -
   * ----> +
   - ----> /
   / ----> **
3.It performs wrong operations 10% of the times
*/

alert("Welcome to Faulty Calculator");

function calculator() {
    let random = Math.random();
    let num1 = parseInt(prompt("Enter the first number: "));
    let operator = prompt("Enter the operator: ");
    let num2 = parseInt(prompt("Enter the second number: "));

    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**"
    }

    if (random > 0.1) {
        // do correct calculation
        let codeString = `${num1} ${operator} ${num2}`;
        let result = eval(codeString);
        alert(`The correct result is: ${result}`);
    }
    else {
        // do wrong calculation
        const value = obj[operator];
        let codeString = `${num1} ${value} ${num2}`;
        let result = eval(codeString);
        alert(`The incorrect result is: ${result}`);

    }
}

calculator();
