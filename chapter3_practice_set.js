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

//chapter3 Q4
