console.log("laptrinhvien ")
import NhanVien from "./nhanvien.js";
export default class LapTrinhVien extends NhanVien {
    public age: number;
    constructor(name: string, id: number, salary: number, age: number) {
        super(name, id, salary);
        this.age = age;
    }
    printInfo()
    {
        console.log(`name: ${this.name}, id: ${this.id}, salary: ${this.salary}, age: ${this.age}`);
    }
}