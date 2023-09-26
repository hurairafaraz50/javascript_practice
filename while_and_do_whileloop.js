// program 1-11
let i = 0;
while (i < 12) {
  alert(i);
  i++;
}
// program 1-10
let j = 0;
do {
  alert("counting is started from " + j);
  j++;
} while (j <= 10);

// 1) Write a program to keep asking for a number until you enter a negative number. At the end, print the sum of all entered numbers.

let total = 0;
while (true) {
  let num = parseInt(prompt("Enter a number : "));
  if (isNaN(num)) {
    alert("This is positive number ");
    continue;
  }
  if (num < 0) {
    alert("This is negative number ");
    break;
  }
  total = total + num;
}
alert(" The sum of all entered number : " + total);
