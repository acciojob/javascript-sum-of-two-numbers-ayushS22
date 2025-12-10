let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Convert inputs to numbers
let num1 = Number(input1);
let num2 = Number(input2);

// Validation conditions
if (
  input1 === "" || input2 === "" ||        // empty input
  isNaN(num1) || isNaN(num2)              // non-numerical values
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  let sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}
