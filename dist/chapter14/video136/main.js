console.log("main");
// default export
import Animal from "./Animals";
// import { Animal } from "./Animals"
import { sum, minus } from "./math";
console.log(sum(1, 2));
console.log(minus(5, 3));
const a = new Animal("Dog");
console.log(a.name);
