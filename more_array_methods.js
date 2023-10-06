let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num1 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num2 = [211, 212, 213, 214, 215, 216, 217, 218, 219];
delete num[4];
alert(num);
alert(num.length);
let newarray = num.concat(num1, num2);
alert(newarray);
alert(num);
alert(num1);
alert(num2);
let num3 = [21, 1, 13, 14, 5, 2, 7, 18, 29];
num3.sort(compare);
alert(num3);

let num4 = [213, 142, 1453, 14, 465, 62, 47, 318, 29];
let deletevalue = num4.splice(
  2,
  6,
  23,
  3456,
  462,
  234,
  345,
  634,
  234,
  435,
  64565
);
alert(num);
alert(deletevalue);

let newnum1 = num4.slice(3, 6);
alert(newnum1);
