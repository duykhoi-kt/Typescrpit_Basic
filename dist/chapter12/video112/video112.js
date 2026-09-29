console.log("video 112: class và object trong TypeScript");
// class: định nghĩa tổng quát, miêu tả chung chung
// tạo class lion
class Lion {
    constructor() {
        // miểu tả đặc điểm con sư tử
        this.name = "simba";
    }
    // miêu tả hành vi
    sleep() {
        console.log("sư tử đang ngủ", this.name);
    }
    eat() {
        console.log("sư tử đang ăn");
    }
    roar() {
        console.log("sư tử đang gầm");
    }
}
// miêu tả cụ thể con sư tử simba => object
// clone : new
const sutu1 = new Lion(); // tạo một object sutu1 từ class Lion
sutu1.color = "yellow";
sutu1.sleep();
console.log("=====================");
const sutu2 = new Lion(); // tạo một object sutu2 từ class Lion
sutu2.color = "black";
sutu2.eat();
export {};
