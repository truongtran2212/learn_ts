// class Greeter {
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let truong = new Greeter("Trường")

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
        age: number;
    constructor(name: string, age: number) {
        super(name)
        this.age = age;
    }
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog("Hoàng", 18);
dog.bark();
dog.move(10);
dog.bark();
console.log(dog)