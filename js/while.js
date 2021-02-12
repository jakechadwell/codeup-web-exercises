var x = 2
while(x<=65536) {
    console.log(x)
    x=x*2
}
var allCones=Math.floor(Math.random() *50)+50;
// var w = Math.floor(Math.random() *5) +1;

do {
    var sellCones = Math.floor(Math.random() * 5) + 1;
    if (sellCones <= allCones) {
        console.log(sellCones + " cones sold...");
    }
    else {
        console.log("Cannot sell you " + sellCones + " cones I only have " + allCones + "...");
        continue;
    }
    allCones -= sellCones;
    console.log("I now have " + allCones + " cones.");
} while (allCones > 0);
console.log("Yay! I sold all my cones!");