

import { Animal } from "./Greeter";

type StringOrNumber = string | number | boolean;
var newName:StringOrNumber = true;
console.log(newName);

let cat = new Animal("Gold")
console.log(cat.move(2))
