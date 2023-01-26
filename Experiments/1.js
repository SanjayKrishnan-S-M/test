for (var i=1; i<6; i++) {
  console.log(i);
}
console.log("Counting Completed!")

for(var i=6; i>0; i--){
    console.log(i);
}
console.log("Countdown Completed!")

var i = 1;
while(i<6){
    console.log(i);
    i++;
}
console.log("Counting Completed!")

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
}
console.log("Countdown Completed!")

var i = 2018;
while (i<2023) {
    console.log(i);
    i++;
}


for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("-----------", month);
    }
}

a = 10
console.log(a);

{
    var a = 10;
    let b;
}

b = 20;

console.log(a);
console.log(b);

function y() {
    var a=7;
    function y() {
        console.log(a);
    }
    y();
}
x()


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z)


function a() {
    var i = 10;
    setTimeout (function() {
        console.log(i);
    } , 3000);    
}

function f() {
    for (let j = 1; j<= 5; j++) {
        setTimeout ( function() {
            console.log(j);
        } , j * 1000);
    }
}
f(); 

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
    }
    close(i);
}
x();

setTimeout (function() {
console.log("Timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
   console.log("y");
});


