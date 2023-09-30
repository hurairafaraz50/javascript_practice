//chapter3 Q1
let marks = {
  huraira: 80,
  uzair: 67,
  ahsan: 89,
  ahmar: 46,
  noor: 64,
  ani: 76,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  alert(
    "The marks of " +
      Object.keys(marks)[i] +
      " is " +
      marks[Object.keys(marks)[i]]
  );
}

//chapter3 Q2
for (let key in marks) {
  alert("The marks of " + key + " is " + marks[key]);
}

//chapter3 Q3
let x = 44;
let num;
while (num != x) {
  alert("try again");
  num = parseInt(prompt("Enter a number: "));
}
alert("you have entered a correct number ");

//chapter3 Q4
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
alert(mean(2, 3, 4, 5, 7));
