console.log("video 131: Default generic type parameter typescript");
function printValue(value) {
    try {
        console.log(value); // lỗi, vì T có thể là number, không có thuộc tính length
    }
    catch (error) {
        console.log("Error:", error);
    }
}
printValue("Hello");
printValue([1, 2, 3, 4]);
const test1 = { data: "Hello" }; // T mặc định là string
const test2 = { data: 123 }; // T được thay đổi thành number
console.log(test1.data);
console.log(test2.data);
export {};
