function bmiCalculation(weight, height) {
  return weight / (height * height);
}
var bmi = bmiCalculation(65, 1.8);
console.log(bmi);
