console.log("Video 125: generic functions in TypeScript");
function testNumber(value) {
    return value;
}
function testGeneric(value) {
    return value;
}
const getFirstElement = (arr) => {
    return arr[0];
};
console.log(getFirstElement([1, 2, 3, 4, 5])); // đây là cách gọi hàm generic với kiểu dữ liệu number
// testGeneric<number>(10) là 
const a = testGeneric(10); // này là cách gọi hàm generic với kiểu dữ liệu number\
const b = testGeneric("Hello"); // này là cách gọi hàm generic với kiểu dữ liệu string
const c = testGeneric(true); // này là cách gọi hàm generic với kiểu dữ liệu boolean
export {};
