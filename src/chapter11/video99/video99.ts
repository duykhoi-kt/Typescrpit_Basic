export{}

console.log("video 99: null và undefined");

type TName = string | null;

let name: TName = null;
const age = undefined;

const printName = (name: TName) => {
    if(name === null) {
        console.log("name is null");
    }
   console.log("name = ", name);
}