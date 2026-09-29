export{}
console.log("video 128: Generic class typescript");

class MagicBox<T>{
    content: T;
    constructor(content: T){
        this.content = content;
    }
}
const box1 = new MagicBox<string>("Hello");
console.log( box1.content);