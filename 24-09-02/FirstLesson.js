// Task #1
const numbers = [1, 3, 4, 8];

function findNumberIndex(_array, _number){
    numberIndex = _array.indexOf(_number);
    return numberIndex;
}

console.log(findNumberIndex(numbers, 1));


// Task #2
function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(3, 3));


// Task #3
const addNumbersArrow = (num1, num2) => {
    return num1 + num2;
}

console.log(addNumbersArrow(26,4));


// Task #4
const addNumbersArrowSmall = (num1, num2) => num1 + num2;

console.log(addNumbersArrowSmall(6,4));


// Task #5
function addNumbersNested(num1){
    return function (num2){
        return num1 + num2;
    }
}

console.log(addNumbersNested(2)(3));


// Task #6
const addNumbersNested2 = (num1) => (num2) => num1 + num2;

console.log(addNumbersNested2(2)(4));


// Task #7
const greet = (_name = "Loser") => "Hello, " + _name;

console.log(greet())
console.log(greet("Gangster"))


