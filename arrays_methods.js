let num = [12, 34, 56, 46, 435, 768, 234];
// let a = num.toString();
let b = num.join("****");
let c = num.pop(56);
let d = num.push(12);
alert(a);
alert(typeof a);
alert(b);
alert(typeof b);
alert(num, c);
alert(typeof c);
alert(num, d);
alert(typeof d);

let e = num.shift();
alert(e, num);
let f = num.unshift(23, 32, 12);
alert(f, num);
