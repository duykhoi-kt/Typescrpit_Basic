export{}
console.log("video 102: Intersection Type trong TypeScript");

type Tusername = string | number; // union type => dùng dấu "|"

type student ={
    id:number,
    name:string
}
type Tcoder ={
    address:string,
    language:string
}
type Tprogrammer = student & Tcoder; // intersection type => dùng dấu "&"
const hoidanit:Tprogrammer = {
    address: "Hà Nội",
    language: "TypeScript",
    id: 1,
    name: "Hoi Dan IT"
}

const username: Tusername = "hoidanit"
