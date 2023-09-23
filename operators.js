alert("Choose Any Operator And Any Two Numbers ")
let operator = prompt('Enter operator ( either +, -, * , /,**,%,): ')
let num1 = parseFloat( prompt("choose first number : "))
let num2 = parseFloat( prompt("choose second number : "))
let result
if (operator== "+"){
    result (num1 + num2)
}
else if (operator== "-"){
    result = num1 + num2
}
else if (operator== "*"){
    result = num1 * num2
}
else if (operator== "/"){
    result = num1 / num2
}
else if (operator== "**"){
    result = num1 ** num2
}
else if (operator== "%"){
    result = num1 % num2
}
else {
    alert("Invalid Operator")
}
alert("The final result is :" + result )
