console.log("video 119: Tính đa hình");
class Dog {
    makeSound() {
        console.log("Gâu gâu");
    }
}
class cat {
    makeSound() {
        console.log("Meo meo");
    }
}
class Cow {
    makeSound() {
        console.log("Bò bò");
    }
}
const dog = new Dog();
const cat1 = new cat();
const cow = new Cow();
// tạo một mảng chứa các đối tượng của các lớp khác nhau nhưng cùng implement interface IAnimal
const animals = [dog, cat1, cow];
animals.forEach(animal => {
    animal.makeSound();
});
export {};
