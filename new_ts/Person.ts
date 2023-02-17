// khi sử dụng dấu ? thì property thành Optional nên nó có thể k cần khi báo

interface Person {
    name?: string
    age: number
}

var student: Person = {
    age: 16,
}

function sum(a: number, b: number) {
    return a + b;
}

