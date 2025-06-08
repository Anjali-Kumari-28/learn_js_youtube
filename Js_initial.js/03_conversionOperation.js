let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = "Anjali"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//1 => true(1), 0 => false(0)
//"" => false
// "Anjali" => true

let someNumber = 32

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);