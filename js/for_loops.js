function showMultiplicationTable(num) {
    console.log(num + 'x1=' +num*1, num + 'x2=' +num*2, num + 'x3=' +num*3, num + 'x4=' +num*4, num + 'x5=' +num*5, num + 'x6=' +num*6, num + num + 'x7=' +num, num + 'x8=' +num*8, num + 'x9=' +num*9, num + 'x10='+num*10)
}

function isOddOrEven () {
    for(var x = 0; x<10 ; x++) {
        var random = Math.floor((Math.random() * 200) + 20);
        if (random%2===0) {
            console.log(random + 'is even.')
        } else if (random%2!==0) {
            console.log(random + 'is odd.')
        } else {
            console.log(random + 'is neither even or odd.')
        }
    }
}

function pyramid() {
  var factor = '1'
    for(var x =1 ; x<=9 ; x++ ) {
        var multiplier = Number(factor)
        console.log(x * multiplier);
        factor = (factor + '1');
    }
}console.log(pyramid())

for( var x = 100 ; x>0 ; x=x-5) {
    console.log(x)
}

