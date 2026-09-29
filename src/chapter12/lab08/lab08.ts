export { };

type TRole = "student" | "teacher";
class User {
    public name : string;
    private _email: string;
    protected role:TRole;
    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role?? "student";
    }
    // getters and setters
    get email() {
        return this._email;
    }
    set email(email: string) {
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
    courses: string[] = [];
    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }
    // phương thước addCourse(courseName:string):void để thêm khóa học vào danh sách khóa học của sinh viên
    addCourse(courseName: string): void {
        this.courses.push(courseName);
    }
    //printUserInfo : [Teacher] Eric - Courses Taught: React
    printUserInfo() {
        const courseName = this.courses.join(", ");
        console.log(`[Teacher] ${this.name} - Courses Taught: ${courseName}`);
    }
}

class Student extends User {
    enrolledCourse: string[] = []; 
    constructor(name: string, email: string) {
        super(name, email);
    }
    //Phương thức: enroll(courseName: string): void
    enroll(courseName: string): void {
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
// 👉 Output:
// [Student] Hoidanit - Enrolled Courses: TypeScript Pro
// 👉 Output:
// [Teacher] Eric - Courses Taught: React
