// map method
let arr = [34, 23, 65];
let a = arr.map((value, index, array) => {
  alert(value, index, array);
  return value + index;
});
alert(a);
alert(arr);

// // filter method
let arr2 = [324, 34, 23, 65, 34, 452345, 434, 3256, 4, 342];
let a2 = arr2.filter((b) => {
  return b <= 324;
});
alert(a2);
alert(arr2);

// Reduce method
let arr3 = [4, 3, 2, 6, 4, 5, 34, 2, 1, 7];
let a3 = arr3.reduce((c1, c2) => {
  return c1 + c2;
});
alert(a3);
alert(arr3);
