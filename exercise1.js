let input = 0;
let num = Math.floor(Math.random() * 100);
while (true) {
  input = parseInt(prompt("enter a number : "));
  if (num == input) {
    alert("random number is equal to the guess number ");
  }

  input = input + 1;
  alert(input);
  alert(num);
}
