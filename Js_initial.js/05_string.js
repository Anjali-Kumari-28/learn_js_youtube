const name = "anjali" // define string
const repoCount = 20

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('anjali-kumari-singh') // another way to define string

// console.log(gameName[0]); // key value excess
// console.log(gameName.__proto__); // prototype excess

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 5) // can not give negative value
console.log(newString);

const anotherString = gameName.slice(-6, 4) // can give negative value
console.log(anotherString);

const newStringOne = "   anjali   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://anjali.com/anjali%20singh"

console.log(url.replace('%20', '_'));
console.log(url.includes('anjali'));

console.log(gameName.split('-'));