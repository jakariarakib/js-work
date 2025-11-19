 // Define a function named check_numbers using arrow function syntax
const check_numbers = (x, y) => {
  // Check if x or y is in the range between 50 and 99 (inclusive)
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99);
};

// Log the result of calling the check_numbers function with the arguments 12 and 101 to the console
console.log(check_numbers(12, 101));

// Log the result of calling the check_numbers function with the arguments 52 and 80 to the console
console.log(check_numbers(52, 80));

// Log the result of calling the check_numbers function with the arguments 15 and 99 to the console
console.log(check_numbers(15, 99));
