// Daniel Davis, multiply, a function that takes two numbers and increments each by 1 then preforms mutiplication

function mulitply(num1,num2) { // multiplies two numbers after incrementing them
  var x = num1; // gets first number given
  var y = num2; // gets second number given
  var output = 0; // creates output value of function
  
  for (var i=0, i<1, ++i) { // loops the two numbers given
    inc(x); // increments first number
    inc(y); // increments second number
    output = x * y; // then multiplies them together
  }// end of for loop
  return output; // gives back their output
} // end of function

function inc(num) { // takes a number and increments it by 1
  var output = num; // the output of function gets number given
  ++output; // increments that number
  return output; // and returns it
}// end of function
