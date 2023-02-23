// Function Expression
var sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3));

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(2, 3));

//------------------------------------------

var greet = name => console.log("Xin chào " + name + "!");
greet("NIIT");

// Nhiều tham số, Một câu lệnh
var multiply = (x, y) => x * y;
console.log(multiply(6, 9));

// Nhiều tham số, Nhiều câu lệnh
var divide = (x, y) => {
    if (y !== 0) {
        return x / y;
    }
}
console.log(divide(10, 2));

// Không tham số, Một câu lệnh
var hello = () => console.log('Xin chào ES6');
hello();