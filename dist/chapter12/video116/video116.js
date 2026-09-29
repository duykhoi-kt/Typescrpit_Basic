console.log("video 116: Tính đóng gói");
class cat {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    //getter
    get age() {
        return this.age_;
    }
    //setter 
    set age(value) {
        this.age_ = value;
    }
    constructor(name, age, id) {
        this.name = name;
        this.age_ = age;
        this._id = id;
    }
    makeSound() {
        console.log("meow meow");
    }
}
const cat1 = new cat("Mèo", 2, 123);
console.log(cat1.name);
cat1.makeSound();
const a = cat1.age; // getter
console.log(a);
cat1.age = 3; // setter
export {};
