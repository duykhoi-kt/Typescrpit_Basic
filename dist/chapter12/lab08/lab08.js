class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    // getters and setters
    get email() {
        return this._email;
    }
    set email(email) {
        if (email.includes("@")) {
            this._email = email;
        }
        else {
            console.log("Email không hợp lệ");
        }
    }
    // trả về thông tin người dùng
    printUserInfo() {
        console.log(`Name: ${this.name}, Email: ${this._email}, Role: ${this.role}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    // phương thước addCourse(courseName:string):void để thêm khóa học vào danh sách khóa học của sinh viên
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    //printUserInfo : [Teacher] Eric - Courses Taught: React
    printUserInfo() {
        const courseName = this.courses.join(", ");
        console.log(`[Teacher] ${this.name} - Courses Taught: ${courseName}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourse = [];
    }
    //Phương thức: enroll(courseName: string): void
    enroll(courseName) {
        this.enrolledCourse.push(courseName);
    }
    //printUserInfo : [Student] Alice - Enrolled Courses: React, TypeScript
    printUserInfo() {
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${this.enrolledCourse.join(", ")}`);
    }
}
const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");
hoidanit.enroll("JavaScript Basics");
const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");
eric.addCourse("Node.js");
eric.printUserInfo();
hoidanit.printUserInfo();
export {};
// 👉 Output:
// [Student] Hoidanit - Enrolled Courses: TypeScript Pro
// 👉 Output:
// [Teacher] Eric - Courses Taught: React
