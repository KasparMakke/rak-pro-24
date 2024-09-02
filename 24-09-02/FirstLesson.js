// Lesson #1
const numbers = [1, 3, 4, 8];

function findNumberIndex(_array, _number){
    numberIndex = _array.indexOf(_number);
    return numberIndex;
}

console.log(findNumberIndex(numbers, 1));


// Lesson #2
function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(3, 3));


// Lesson #3
const addNumbersArrow = (num1, num2) => {
    return num1 + num2;
}

console.log(addNumbersArrow(26,4));


// Lesson #4
const addNumbersArrowSmall = (num1, num2) => num1 + num2;

console.log(addNumbersArrowSmall(6,4));


// Lesson #5
function addNumbersNested(num1){
    return function (num2){
        return num1 + num2;
    }
}

console.log(addNumbersNested(2)(3));


// Lesson #6
const addNumbersNested2 = (num1) => (num2) => num1 + num2;

console.log(addNumbersNested2(2)(4));