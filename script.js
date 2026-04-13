let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

if (
  input1 === null ||
  input2 === null ||
  input1.trim() === "" ||
  input2.trim() === ""
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  let num1 = Number(input1);
  let num2 = Number(input2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    let sum = num1 + num2;

    // ✅ Use original input for display (important for tests)
    alert(`The sum of ${input1} and ${input2} is ${sum}.`);
  }
}