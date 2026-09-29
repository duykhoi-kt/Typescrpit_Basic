export{}
console.log("video 131: Default generic type parameter typescript");

function printValue <T = string>(value:T){
    try{
        console.log(value); // lỗi, vì T có thể là number, không có thuộc tính length
    } catch (error) {
        console.log("Error:", error);
    }

}

printValue("Hello");
printValue<number[]>([1,2,3,4]); 

interface ITest< T = string>{
    data: T; // T mặc định là string, nhưng có thể được thay đổi khi sử dụng interface
}

const test1: ITest = { data: "Hello" }; // T mặc định là string
const test2: ITest<number> = { data: 123 }; // T được thay đổi thành number

console.log(test1.data);

console.log(test2.data);