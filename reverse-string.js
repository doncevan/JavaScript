// Set one parameter to hold the value of the input string
function reverseString(reverseMe) {
  // Declare a variable with an empty string to store the reversed string
  let reversed = "";

  // Loop through the `reverseMe` string from back to front
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    // Add each character to the end of `reversed`
    reversed += reverseMe[i];
  }
  return reversed;
}

// Return the completed string when the loop is complete return reversed; }
console.log(reverseString("Moldova"));
