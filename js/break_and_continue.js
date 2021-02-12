// var i = prompt('Give an odd number between 1 and 50.')
// // var x = i<1 && i>50 && i%2===0
// while ( i<1 || i>50 || i%2===0 ) {
//     i = prompt('Give an odd number between 1 and 50.')
// }
// if(i>=1 && i<=50) {
//
// }
while (true) {
    var i = prompt('Give an odd number between 1 and 50.')
    if(i>=1 && i<=50 && i%2!==0) {
        break;
    }
}
for(var x = 0;x<50;x++) {
    if (x == i) {
        continue;
    } else if (x >= 1 && x <= 50 && x % 2 !== 0) {
        console.log('Here is an odd number: ' + x)
    }
}
