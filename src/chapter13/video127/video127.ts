export{}
console.log("generic type typescript");
// generic type
type MyArrString = string[]

type MyArrNumber = number[]

// type generic
type MyGeneric<T> = T[];

type Wrapper <T> = {
    data:T
}

// khai báo biến a kiểu type là string[]
const a:MyArrString = ["hoidanit","typescript"];

// khái báo biến b kiểu type là number[]
const b:MyArrNumber = [1,2,3,4,5,];

// khai báo biến c kiểu type là MyGeneric<string>
const c:MyGeneric<string> = ["JavaScript","TypeScript"];

// khai báo biến d kiểu type là MyGeneric<number>
const d:MyGeneric<number> = [1,2,3,4,5];

// khai báo biến e kiểu type là Wrapper<string>
const e:Wrapper<string> = {
    data:"hoidanit"
}