// chapter 5 Q1
let arr7 = [23, 34, 54, 23, 67, 45, 234];
let input = parseInt(prompt("enter a number : "));
arr7.push(input);
alert(arr7);

// chapter 5 Q2
let arr = [23, 34, 54, 23, 67, 45, 234];
while (true) {
  let input = parseInt(prompt("enter a number : "));
  arr.push(input);
  if (input == 0) {
    alert("0 is added to the array ");
    break;
  }
  alert(arr);
}

// chapter 5 Q3
let arr2 = [30, 34, 20, 60, 34, 345, 50, 670, 4, 342];
let a2 = arr2.filter((b) => {
  return b % 10 == 0;
});
alert(a2);
alert(arr2);

// chapter 5 Q4
let arr5 = [34, 23, 65, 2, 45, 6, 7, 4, 3];
let a = arr5.map((x) => {
  return x * x;
});
alert(a);
alert(arr5);

// chapter 5 Q5
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a3 = arr3.reduce((c1, c2) => {
  return c2 * c1;
});
alert(a3);
alert(arr3);
