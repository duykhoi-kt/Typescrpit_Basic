export { }

console.log("video 120: Tính trừu tượng trong class")

// tính trừu tượng là một khái niệm trong lập trình hướng đối tượng, cho phép chúng ta định nghĩa các lớp và phương thức mà không cần phải triển khai chi tiết. Nó giúp tạo ra các lớp cơ sở (abstract class) mà các lớp con có thể kế thừa và triển khai các phương thức trừu tượng đó.

abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
    test() {
        console.log("test");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu");
    }

}

const dog = new Dog("Chó");
dog.makeSound();
dog.test();