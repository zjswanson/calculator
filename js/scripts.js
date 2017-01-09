var add = function(number1, number2) {
	return number1 + number2;
}

var subtract = function(number1, number2) {
  return number1 - number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var bmi = function(weight, height) {
  return weight / (height * height);
}

var bodyIndex = function() {
  var weight = parseFloat(prompt("Enter your weight in kilograms"));
  var height = parseFloat(prompt("Enter height in meters"));
  var index = bmi(weight, height);
  alert(index);
}

var convertCToF = function(celsius) {
  return (celsius * 9)/5 + 32;
}

var promptCToF = function() {
  var celsius = parseFloat(prompt("Enter the temperature in celsius:"));
  alert(convertCToF(celsius));
}

promptCToF();

var number1 = parseInt(prompt("Enter an number"));
var number2 = parseInt(prompt("Enter another number"));
var result = add(number1,number2);
alert(result);
