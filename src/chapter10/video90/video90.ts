export{};
console.log("video 90: any type / unknown type");

// function test(name: any) {
//   console.log("name", name);
// }
let name:unknown = "hoidanit";
if (typeof name === "string")
{
  name.toUpperCase();
}

let name1:any = 26;
name1.toUpperCase();
let name2:string = "typescript";
name2.toUpperCase();
console.log("name", name);