"use strict"; //treat all JS code as nevwer version

// alert(3 + 3) //we are using node.js,not browser

// console.log(3 + 5) //code readability should be high

// console.log("Anjali")

let name = "Anjali"
let age = 20
// let isLoggedIn = true

// number => 2 to power 53
//bigint
//string => "abc"
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => uniqueness

//object
// console.log(typeof "Anjali");
// console.log(typeof age);
// console.log(typeof null); // type - object

// console.log(typeof undefined); // type - undefined



//Data types
// 1 primitive data type

// 7types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Non primitive (Reference)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "ramcharan"];
let myObj = {
    name: "anjali",
    age: 20,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);