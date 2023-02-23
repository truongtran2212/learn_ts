interface Person<A, B> {
    name: A
    age: B
    getFullName(): A;
}

var student: Person<string, number> = {
    age: 16,
    name: "Trường",
    getFullName()  {
        return "Hello"
    },
}

console.log(student.getFullName());


function sum(a: number, b: number) {
    return a + b;
}

let tuple: [string,number]
tuple = ["1", 23]
tuple.push(24)

console.log(tuple);
