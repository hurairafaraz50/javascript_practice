let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i > num.length; i++) {
  alert(num[i]);
}
alert(num);
num.forEach((element) => {
  alert(element * element);
});
let name = "huraira";
let arra = Array.from(name);
alert(arra);
for (let i of num) {
  alert(i);
}
for (let j in num) {
  alert(j);
}
