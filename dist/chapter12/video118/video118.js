console.log("video 180: interface và implements trong class");
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Gâu Gâu");
    }
    run() {
        console.log("Chạy nhanh");
    }
}
const myDog = new Dog("Pitbull");
myDog.makeSound();
myDog.run();
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, id, name) {
        super(id, name);
        this.skill = skill;
    }
}
const hoidanit = new LapTrinhVien("JavaScript", 1, "Nguyễn Duy Khôi");
export {};
