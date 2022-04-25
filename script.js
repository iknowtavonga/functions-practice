// This is how you define a function
function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}

// After defining a function, this is how you call the function
singSong();

// adding a parameter to your function
function greetings(firstName) {
    console.log(`Good day ${firstName}!`)
}
// Adding an argument when calling your function
greetings('Tavonga');

// Passing multiple parameters
function introduction(firstName, lastName) {
    console.log(`Hi, get to know me! I am ${firstName} ${lastName}`);
}
// Calling multiple arguments
introduction('Tavonga', 'Karimanzira')

// concatinating a string n number of times
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}


function isSnakeEyes(firstRoll, secondRoll) {
    if (firstRoll === 1 && secondRoll === 1) {
        console.log('Snake Eyes');
    } else {
        console.log('Not Snake Eyes')
    }
}

isSnakeEyes(1, 1)

// Capitalizing the first letter in a string
function capitalize(str) {
    let firstLetter = str[0].toUpperCase();
    let newWord = firstLetter + str.slice(1);
    return newWord;
}

// Summing all the numbers in an array
function sumArray(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

// Returning a given day in the week
function returnDay(day) {
    // first we make an array with all the days in the week. We make the first item empty because the index is 0
    let weekDays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // We then cross check to see if the user is entering the correct day between 1 and 7
    if (day < 1 || day > 7) {
        return null;
    }
    // we then create a loop that runs from 0 to 7
    for (let i = 0; i < weekDays.length; i++) {
        // in that loop we run our array and use "day", the user input, to be what searches the loop for the index
        return weekDays[day];
    }
    // YES I'M THAT SMART, I DID THAT!
}

// HIGHER ORDER FUNCTIONS
// RETURNING A FUNCTION AS AN ARGUMENT

// THIS FUNCTION WILL CALL THE ARGUMENT TWICE
function callTwice(func) {
    func();
    func();
}

// this function rolls a dice and generates a number between 1 and 6
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

/*  when calling a function as an argument 
    we don't add an argument for the inner function
*/
callTwice(rollDie)

// RETURNING A FUNCTION
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('CONGRATS, I AM A GOOD ONE');
            console.log('YOU WIN SOME MONEY I GUESS');
        }
    } else {
        return function () {
            alert('I AM NOT TO BE FUCKED WITH!');
            alert('GIVE ME YOUR MONEY NOW!!!!')
        }
    }
}

// This function takes 2 values and puts them in a function that evaluates
// if the given number is between the 2 values

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// we will then put this in a variable that compares the 2 numbers
const isChild = makeBetweenFunc(0, 18);

// we then call the function with a number we'd like to check
isChild(16);


// DEFINING METHODS (OBJECTS)
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

/* ********************************************************** */

// FUNCTION EXPRESSION (A DIFFERENT WAY TO CALL A FUNCTION)
const speak = function () {
    console.log('Good Day!')
};

// on a function expression, you should put the ; after the expression
// You call the function expression, the same way you call a normal function

speak();
// function expressions are not hoisted up the script like declarations

/* ********************************************************** */

// ASIGNING DEFAULT PARAMETERS TO FUNCTIONS
const greet = function (name = 'John', time = 'morning') {
    console.log(`Good ${time} ${name}`);
}

greet();

/* ********************************************************** */

// RETURNING VALUES
const calcArea = function (radius) {
    return 3.14 * radius ** 2;
};

const area = calcArea(3);
console.log(area);