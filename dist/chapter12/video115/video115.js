console.log("Access Modifier ");
// khai báo biến đôi tượng
const DuyKhoi = {
    name: "Nguyễn Duy Khôi",
    age: 20,
    address: "Hà Nội"
};
// khai báo class
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    makeSound() {
        console.log("Animal sound", this.id);
    }
}
const cat = new Animal("Mèo", 1);
console.log(cat.name);
cat.makeSound();
export {};
