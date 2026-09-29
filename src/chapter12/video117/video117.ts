export{}
console.log("video 117: Tính kế thừa trong class")

class Parent{
    //fileds
    public gold : number | undefined;
    public money: number | undefined;
    //methods
    shareHouse(){
        console.log("Share house");
    }

    
}

class child extends Parent{
    public name : string | undefined;
    public age : number | undefined;
    public phone : number | undefined;
}
const Khoi = new child();
Khoi.age = 20;
Khoi.name = "Nguyễn Duy Khôi";
Khoi.phone = 123456789;
Khoi.gold = 1000000;
Khoi.money = 2000000;
Khoi.shareHouse();

//1. cha - con

// animal - Dog
// Person - Student