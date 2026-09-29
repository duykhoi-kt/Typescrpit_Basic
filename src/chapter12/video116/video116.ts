export { }

console.log("video 116: Tính đóng gói")

class cat {
    public name: string;
    private age_: number;
    private _id: number;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    //getter
    get age() {
        return this.age_;
    }
    //setter 
    set age(value: number) {
        this.age_ = value;
    }
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age_ = age;
        this._id = id;
    }

    makeSound() {
        console.log("meow meow")
    }
}
const cat1 = new cat("Mèo", 2,123);
console.log(cat1.name);
cat1.makeSound();

const a = cat1.age; // getter
console.log(a);
cat1.age=3// setter