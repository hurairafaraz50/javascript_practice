// chapter 4 Q1
let boy = 'hur"';
alert(boy.length);

// chapter 4 Q2
const sentence = " the quick brown mice jumps over the cat. ";
const word = " dog ";
alert(
  `the word ${word} ${
    sentence.includes(word) ? " is " : " is not"
  } in the sentence`
);
// chapter 4 Q3
let x = "khanG";
alert(x.toUpperCase());
// chapter 4 Q4
let rupee = "plz give me Rs 10000";
let amount = rupee.slice("plz give me Rs ".length);
let paisa = rupee.slice(15);
alert(amount);
alert(paisa);
// chapter 4 Q5
let z = "hello, my name are huraira faraz khan";
alert(z.replace("are", "is"));
