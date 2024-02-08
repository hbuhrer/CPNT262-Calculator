// Initialize variables to store current number, operator, and result
let currentNumber = "";
let operator = "";
let result = "";

// Get reference to the display element
const display = document.getElementById("display");

// Function to append a number to the current input
function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber; // Update display with the current number
}

// Function to append a decimal point to the current input
function appendDecimal() {
  if (!currentNumber.includes(".")) {
    // Check if decimal point already exists
    currentNumber += ".";
    display.value = currentNumber; // Update display with the current number
  }
}

// Function to set the operator for the calculation
function setOperator(op) {
  operator = op;
  result = currentNumber; // Store the current number as the first operand
  currentNumber = ""; // Reset current number for the next input
}

// Function to perform the calculation based on the operator
function calculate() {
  switch (operator) {
    case "+":
      result = parseFloat(result) + parseFloat(currentNumber); // Addition
      break;
    case "-":
      result = parseFloat(result) - parseFloat(currentNumber); // Subtraction
      break;
    case "*":
      result = parseFloat(result) * parseFloat(currentNumber); // Multiplication
      break;
    case "/":
      result = parseFloat(result) / parseFloat(currentNumber); // Division
      break;
  }
  display.value = result; // Update display with the result
  currentNumber = result.toString(); // Store result as current number for further calculation
}

// Function to clear the display and reset variables
function clearDisplay() {
  currentNumber = "";
  operator = "";
  result = "";
  display.value = "";
}