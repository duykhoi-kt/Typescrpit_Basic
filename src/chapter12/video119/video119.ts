export{}
console.log("video 119: Tính đa hình");

interface IAnimal{
    makeSound():void;
}

class Dog implements IAnimal{
    makeSound(): void {
        console.log("Gâu gâu");
    } 
}

class cat implements IAnimal{
    makeSound(): void {
        console.log("Meo meo");
    }
}

class Cow implements IAnimal{
    makeSound(): void {
        console.log("Bò bò");
    }
}
const dog = new Dog();
const cat1 = new cat();
const cow = new Cow();
// tạo một mảng chứa các đối tượng của các lớp khác nhau nhưng cùng implement interface IAnimal
const animals:IAnimal[] = [dog,cat1,cow];

animals.forEach(animal => {
    animal.makeSound();
})