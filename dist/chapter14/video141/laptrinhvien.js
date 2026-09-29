console.log("laptrinhvien ");
import NhanVien from "./nhanvien.js";
export default class LapTrinhVien extends NhanVien {
    constructor(name, id, salary, age) {
        super(name, id, salary);
        this.age = age;
    }
    printInfo() {
        console.log(`name: ${this.name}, id: ${this.id}, salary: ${this.salary}, age: ${this.age}`);
    }
}
