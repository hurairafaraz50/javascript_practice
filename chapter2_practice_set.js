//chater2 Q1
let age = parseFloat( prompt("What is your age : "))
if (age > 10 && age <=20){
alert("Your age is between 10 and 20 ")
}
else{
alert("Your age is not between 10 and 20 ")
}

//chater2 Q2
let age = parseFloat( prompt("What is your age : "))
switch(age){
    case 10:
       alert("Your age is between 10 and 20 ") 
       break
    case 11:
       alert("Your age is between 10 and 20 ") 
       break
    case 12:
       alert("Your age is between 10 and 20 ") 
       break
    case 13:
       alert("Your age is between 10 and 20 ") 
       break
    case 14:
       alert("Your age is between 10 and 20 ") 
       break
    case 15:
       alert("Your age is between 10 and 20 ") 
       break
    case 16:
       alert("Your age is between 10 and 20 ") 
       break
    case 17:
       alert("Your age is between 10 and 20 ") 
       break
    case 18:
       alert("Your age is between 10 and 20 ") 
       break
    case 19:
       alert("Your age is between 10 and 20 ") 
       break
    case 20:
       alert("Your age is between 10 and 20 ") 
       break
    default:
        alert("Your age is not between 10 and 20 ")
}

//chater2 Q3
let num = parseInt( prompt("Enter any number : "))
if(num%2==0 && num%3==0){
    alert("it is divisible by 2 or 3")
}
else {
        alert("it is not divisible by 2 or 3")

}

//chater2 Q4
let num = parseInt( prompt("Enter any number : "))
if(num%2==0 || num%3==0){
    alert("it is divisible by 2 or 3")
}
else {
        alert("it is not divisible by 2 or 3")

}

//chater2 Q5
let personAge = parseInt( prompt("Enter any number : "))
let age = personAge >18 ? " You can drive " : " You cannot drive "
alert (age)