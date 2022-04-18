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