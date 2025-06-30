let x = [];
let count = 1;
function fizzbuzz() {
  while (count <= 100) {
    if (count % 3 == 0 && count % 5 == 0) {
      x.push("fizzbuzz");
    } else if (count % 3 == 0) {
      x.push("fizz");
    } else if (count % 5 == 0) {
      x.push("buzz");
    } else {
      x.push(count);
    }

    count++;
  }
  console.log(x);
}
fizzbuzz();
