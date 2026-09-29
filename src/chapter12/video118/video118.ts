export{}

console.log("video 180: interface và implements trong class");

// interface là một cấu trúc trong TypeScript được sử dụng để định nghĩa các kiểu dữ liệu, đặc biệt là các đối tượng. Nó cho phép bạn xác định các thuộc tính và phương thức mà một đối tượng phải có, mà không cần cung cấp triển khai cụ thể. Interface giúp đảm bảo rằng các đối tượng tuân thủ một hợp đồng nhất định, giúp tăng tính nhất quán và dễ bảo trì trong mã nguồn.
interface IAnimal{
    makeSound():void;
}
interface IRun{
    run():void;
}
class Dog implements IAnimal,IRun{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }
    makeSound(): void {
        console.log("Gâu Gâu");
    }
    run(): void {
        console.log("Chạy nhanh");
    }
}
const myDog = new Dog("Pitbull");
myDog.makeSound();
myDog.run();
class Person{
    gender:string|undefined;
}

class NhanVien{
    id:number;
    name:string;
    constructor(id: number,name:string)
    {
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien{
    skill: string;
    constructor(skill: string, id:number, name:string)
    {
        super(id, name);
        this.skill = skill;
    }
}

const hoidanit = new LapTrinhVien("JavaScript", 1, "Nguyễn Duy Khôi"); 