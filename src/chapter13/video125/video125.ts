export{}
console.log("Video 125: generic functions in TypeScript");

function testNumber(value:number){
    return value;
}
function testGeneric<T>(value:T){
    return value;
}
const getFirstElement = <T>(arr:T[])=> {
    return arr[0];
}
console.log(getFirstElement<number>([1,2,3,4,5])); // đây là cách gọi hàm generic với kiểu dữ liệu number
// testGeneric<number>(10) là 
const a = testGeneric<number>(10); // này là cách gọi hàm generic với kiểu dữ liệu number\

const b = testGeneric<string>("Hello"); // này là cách gọi hàm generic với kiểu dữ liệu string

const c = testGeneric<boolean>(true); // này là cách gọi hàm generic với kiểu dữ liệu boolean