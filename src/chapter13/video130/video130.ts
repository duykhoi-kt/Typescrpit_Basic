export{}
console.log("video 130: generic constraints typescript");

function logLength <T extends { length: number }>(value: T)
{
    console.log(value.length);
}
const a = "hello";
logLength(a);
logLength([1,2,3,4]);

interface IUser
{
    id: number;
    name: string;

}

const user: IUser = {
    id: 1,
    name: "John"
}
function testInterface<T extends IUser>(value: T){

    console.log(value);
}

testInterface(user);
testInterface({id:2, name:"Jane",age:30}); // ok, vì age là thuộc tính bổ sung, không vi phạm ràng buộc T extends IUser

class Animal{
    move()
    {
        console.log("Animal is moving");
    }
}
class Dog extends Animal{
    bark()
    {
        console.log("Dog is barking");
    }
}

function testClass <T extends Animal>(value: T){
    // value.move();
    // value.bark(); // lỗi, vì T chỉ được ràng buộc là Animal, không biết chắc chắn là Dog
    console.log(value);
    // instanceof là một toán tử trong TypeScript (và JavaScript) được sử dụng để kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một lớp cụ thể hay không. Nó trả về true nếu đối tượng là một thể hiện của lớp đó hoặc của bất kỳ lớp con nào của nó, và false nếu không phải.
    if(value instanceof Dog)
    {
        value.bark(); // ok, vì đã kiểm tra instanceof Dog
    }
}
const a1 = new Dog();
// testClass(a1); // ok, vì Dog là subclass(class con) của Animal
testClass(a1);
testClass(new Animal()); // ok, vì Animal là subclass(class con) của Animal

// ràng buộc keyof
function getProperty <T, K extends keyof T>(obj: T, key: K)
{
    
    return obj[key];// trả về giá trị của thuộc tính key trong đối tượng obj

}
const user1 = {name: "Nguyễn Duy Khôi", age: 30};
getProperty(user1, "name"); // ok
getProperty(user1, "age"); // ok