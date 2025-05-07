// Functions

// function login(username,password){
//     // console.log(password);
    
//     console.log(`${username}, Logged in successfully`);   
// }
// login("John", 'secret');
// login("Jane");

// function upperCase(str){
// //    console.log(str.toUpperCase());
//     return str.toUpperCase();

// }
// console.log(upperCase('hello'));

// default parameter
// function calculateArea(width , height = 40){
//     return width * height;
// }

// const area = calculateArea(30);
// console.log(area);

// variables scope
// const fileName = 'xyz.pdf';
// function download(){
    
//     console.log(fileName);
// }

// download()

// Function declaration and expression

// declaration
// function login(){

// }
// Expression

// const login = function (){
// console.log('Logged In');
// }
// login();

// Callback
// function formatText(text,formatCb){
//     return typeof formatCb ===  'function' ? formatCb(text) :   text.toUpperCase();
// }

// const result = formatText('hello', (text) => {
//    return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

// function formatText(text,formatCb){
//     return typeof formatCb ===  'function' ? formatCb(text) :   text.toUpperCase();
// }

// const result = formatText('hello', (text) =>   text.charAt(0).toUpperCase() + text.slice(1));
// console.log(result);


// IIFE (Immediately Invoked function expression)
// (function setup(){
//     console.log('Setup done');    
// })();


// Arrow functions

// const login =  () => {
//     console.log('Logged In'); 
// }
// login();

// const sum =  (num1,num2) => num1 + num

// const result = sum(5,5);
// console.log(result);


