console.log('Hello from external JavaScript.');
alert('Welcome to my Website!')
let fc = prompt('What is your favorite color?');
console.log('The user entered: ' + fc);

//3.1
var littleMermaid = prompt('How many days are you renting little mermaid?');
var brotherbear = prompt('How many days are you renting brother bear?');
var hercules = prompt('How many days are you renting hercules?');
var price = prompt('What is the price for one movie per day?');
var totalp = price * (littleMermaid + brotherbear + hercules);
alert('You will have to pay: ' + totalp)

//3.2
var google = prompt('How many hours did you work for google this week?');
var amazon = prompt('How many hours did you work for amazon this week?');
var facebook = prompt('How many hours did you work for facebook this week?');
var total = (google*400)+(amazon*380)+(facebook*350)
alert('You have earned:$ ' + total );

//3.3
var hasClassAtEight = confirm('Do you have class at Eight oclock?');
var isClassFull = confirm('is class full?');

alert('You can enroll! Is a ' + (!hasClassAtEight && !isClassFull) + ' statement.')


//3.4
var member = confirm('Are you a member?');
var items = confirm('Do you have more than 2 items in your cart?');
var isExpired = confirm('is the offer expired?');
var hasEnoughItems = (member || items)
var canUseOffer = hasEnoughItems && isExpired;
alert('Offer can be applied! Is a ' + canUseOffer + 'statement.')



