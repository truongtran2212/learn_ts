export interface Person<A, B> {
    name: A
    age: B
    getFullName(): A;
}
