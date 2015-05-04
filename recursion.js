//Daniel Davis, recursion, takes two numbers and adds 'X' to itself 'Y' amount of times//

function addSelf(num1,num2) { // recursive code that takes two numbers
  if (num1 === 0) { // if the first number is 0
    return num2; // then return the second number
  }// end of if statement
  return = addSelf(num1 - 1, num2 + num2); // decrease the first number by 1, and add the second number to itself
}// end of function
