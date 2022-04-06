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
