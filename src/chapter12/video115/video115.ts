export{}

console.log("Access Modifier ");

// khai báo biến đôi tượng

const DuyKhoi = {
    name: "Nguyễn Duy Khôi",
    age: 20,
    address: "Hà Nội"
}
// khai báo class
class Animal{
    public name:string;
    private id:number;

    constructor(name:string, id:number)
    {   
        this.name = name;
        this.id = id;
    }
    public makeSound()
    {
        console.log("Animal sound", this.id);
    }
}

const cat = new Animal("Mèo", 1);
console.log(cat.name);
cat.makeSound();

