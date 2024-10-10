
// // document.body.innerHTML="This is a content";

// //ADDITION

// var addTEXT= "Adding 20 and 40"


// document.write(addTEXT)
// document.write("<br>")

// var addX = 20,
//     addY = 40;

// document.write(addX + addY)
// document.write("<br>")
    
 

// //SUBTRACTION

// document.write("<br>")
// var subtractText= "subtract 10 and 30"


// document.write(subtractText)
// document.write("<br>")

// var subtractX = 30,
//     subtractY = 10;

// document.write(addX - addY)
// document.write("<br>")



// //MULTIPLICATION

// document.write("<br>")
// var multiplyText= "multiply 2 by 5"


// document.write(multiplyText)
// document.write("<br>")

// var multiplyX = 2,
//     multiplyY = 5;

// document.write(multiplyX * multiplyY)
// document.write("<br>")


// //EXPONENTIAL

// document.write("<br>")
// var exponentText= "exponent 6 by 5"


// document.write(exponentText)
// document.write("<br>")

// var exponentX = 2,
//     exponentY = 5;

// document.write(exponentX ** exponentY)
// document.write("<br>")
    


// let balance = 499;

// if(balance != 500){
//     document.write("You can withdraw")
// }else{
//     document.write("You cannot withdraw")
// }
    
// var secretNumber = 7;

// var guess = Number(prompt('Guess the secret number:'))

// while (guess !== secretNumber) {
//     guess = Number(prompt('Guess again'));
// }



function calc() {
    var a = Number(document.querySelector("#value1").value);
    var b = Number(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;


// conditional-statement for validation check

if (a == '' && b == '') {
    return alert('invalid input');
}


switch (op) {
   case 'add':
    calculate= a + b;
    // result= value1 + value2;
    break;
 case 'min':
    calculate= a - b;
//   result= value1 - value2;
    break;
 case 'div':
    calculate= a / b;
//   result = value1 / value2;
    break;
 case 'mul':
    calculate= a * b;
//   result = value1 * value2;
}

alert('Answer is ' + calculate)

}
