console.log("video 114: Constructor - hàm khởi tạo trong class");
class Person {
    // hàm khởi tạo (constructor) là một phương thức đặc biệt trong class, được gọi khi tạo ra một object từ class đó. Nó thường được sử dụng để khởi tạo các thuộc tính của object.
    // this là một từ khóa đặc biệt trong JavaScript và TypeScript, được sử dụng để tham chiếu đến đối tượng hiện tại mà phương thức hoặc hàm đang được gọi.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const DuyKhoi = new Person("Nguyễn Duy Khôi", 20);
console.log(DuyKhoi.name, DuyKhoi.age);
export {};
