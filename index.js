// 1. Ways to display JavaScript
// console.log("Hello World");
// alert("me");
// document.write("This is Doc");

// --------------------------------------------------------------------------------------------------------

// 2.  JavaScript Console API

// console.log("Hello World");
// console.warn("This is warning");
// console.error("This is an error");
/*
    multi 
    line 
    comment 
*/

// 3. JavaScript Variables

// What is Variable? - Container to store data
var number1 = 66;
var number2 = 44;
// console.log(number1 + number2);

// --------------------------------------------------------------------------------------------------------

// 4. Data Types in JavaScript

// Number
var num1 = 455;
var num2 = 33.33;

// String
var str1 = "This is a String";
var str2 = "This is another String";

// Objects

var marks = {
  Ravi: 55,
  Jay: 99.99,
  Harry: 88,
};

// console.log(marks);

// Booleans

var a = true;
var b = false;
// console.log(a, b);

// Undefined and Null

var und = undefined;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of Datatypes in JavaScript
1. Primitive Datatype: undefined, null, number, string, boolean, symbol 
2. Reference Datatype: Arrays and objects
*/

// Array

var arr = [1, 2, "bablu", 4, 5];

// console.log(arr);

// --------------------------------------------------------------------------------------------------------

// 5. Operators in JavaScript

// Arithmetic Operator

var a = 100;
var b = 10;
// console.log("The value of a + b is ", a + b);
// console.log("The value of a - b is ", a - b);
// console.log("The value of a * b is ", a * b);
// console.log("The value of a / b is ", a / b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;

// console.log(c);

// Compare variable

x = 44;
y = 55;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operator
// AND Operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// OR Operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT

// console.log(!true);
// console.log(!false);
// --------------------------------------------------------------------------------------------------------

// 6. Functions in JavaScript
// DRY - Don't Repeat yourself (Called DRY functions)

function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(40, 50);
c2 = avg(100, 110);
// console.log(c1, c2);

// Conditionals in JavaScript

var age = 25;
/*
// Single if Statement 
if (age > 18){
    console.log('You can drink Alcohol')
}

// if - else Statement
if (age > 18){
    console.log('You can drink Alcohol')
}
else {
    console.log('You Cannot drink Alcohol')
}

// if - else ladder

age = 18;

if (age > 36){
    console.log('You are getting older.');
}
else if (age > 26){
    console.log('You are elder');
}
else if (age >16){
    console.log('you are kid, need to learn a lot.');
}
else{
    console.log('You are a small boy.');
}
console.log('End of Ladder.')

*/

var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr);
// for (var i=0; i<arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = o;
// ac++;
// ac = ac + 1;

// while (j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

let j = 0;

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// -----------------------------------------------------------------------------------------------------------------

// 7. Array Methods in JavaScript

let myArr = ["Fan", "Camera", 34, null, true];

// console.log(myArr.length);
// myArr.pop();
// myArr.push("Jay")
// console.log(myArr);

// const newLen = myArr.unshift("Jay")
// console.log(newLen);
// console.log(myArr);

//-------------------------------------------------------------------------------------------------------------------

// 8.  String methods in JavaScript

let myFirstString = "Jay is a good boy";
// console.log(myFirstString.length);
// console.log(myFirstString.indexOf("good"));
// console.log(myFirstString.slice(0,3));

d = myFirstString.replace("Jay", " Komal");
d = d.replace("boy", "girl");
// console.log(d, myFirstString);

//-------------------------------------------------------------------------------------------------------------------

// 9. Dates in JavaScript

let myDate = new Date();
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());