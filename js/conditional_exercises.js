"use strict";

/* ########################################################################## */

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
function analyzeColor(color) {
    if (color === 'red') {
        alert("Apples are red.")
    } else if (color === 'orange') {
        alert("Oranges are orange.")
    } else if (color=== 'yellow') {
        alert("Bananas are yellow.")
    } else if (color === 'green') {
        alert("Grass is green.")
    } else if (color === 'blue') {
        alert("The sky is blue.")
    } else {
        alert("I don't know anything by that color.")
    }
} console.log(analyzeColor(color))

//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
    console.log(analyzeColor(randomColor))
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
    function analyzeColorSwitch(randomColor) {
        switch (true) {
            case (randomColor === 'red') :
                console.log('apples are red.')
                break;
            case (randomColor === 'blue') :
                console.log('the sky is blue.')
                break;
            case (randomColor === 'green') :
                console.log('the grass is green')
                break;
            case (randomColor === 'yellow') :
                console.log('bananas are yellow.')
                break;
            case (randomColor === 'orange') :
                console.log('oranges are orange.')
                break;
            default :
                console.log('I dont know anything by that color.')
        }
    }
    console.log(analyzeColorSwitch(randomColor))

// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
    var whatIsYourColor = prompt('What color would you like to hear about?') ;

    (analyzeColor(whatIsYourColor))

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.


    function calculateTotal(lucky, total) {
        if (lucky === 0) {
            alert(total)
        } else if (lucky === 1) {
            alert(total-(total*.10))
        } else if (lucky === 2) {
            alert(total-(total*.25))
        } else if (lucky === 3) {
            alert(total-(total*.35))
        } else if (lucky === 4) {
            alert(total-(total*.50))
        } else if (lucky === 5) {
            alert(0)
        }
    }

//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt('What is the total of your bill?');

        alert('Your random lucky number was ' + luckyNumber);
        alert('Your previous total was $' + totalBill);
        // alert(calculateTotal(luckyNumber, totalBill));
        alert('Your new total is $ ' + calculateTotal(luckyNumber, totalBill));
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
    var confirm = confirm('Would you like to enter a number?');
    var number = prompt('Please type a number.');
    function doStuff(anyNumber) {
        switch (true) {
            case (anyNumber % 2 === 0) :
                alert ('Your number is even.')
                return
            case (anyNumber % 2 !== 0) :
                alert ('Your number is odd.')
                return
            case (anyNumber.isNan === false) :
                alert ('Your number plus 100 is ' + (anyNumber+100))
                return
            case (anyNumber > 0 ) :
                alert ('Your number is positive.')
                return
            case (anyNumber < 0 ) :
                alert ('Your number is negative.')
                return
            case (anyNumber = 0 ) :
                alert ('Your number is neither positive or negative.')
                return
            default :
                alert ('That is not a number!')
                break;
        }
    }
    confirm + doStuff(number)
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */