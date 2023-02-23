import { Person } from "./interface"

const student: Person<string, number> = {
    age: 16,
    name: "Trường",
    getFullName()  {
        return "Hello"
    },
}

console.log(student);

