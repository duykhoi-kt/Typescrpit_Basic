/*
1.Tạo hai đối tượng học viên (student1, student2)
Mỗi học viên cần có các thông tin sau:
id: số nguyên (number)
name: chuỗi (string)
email: chuỗi (string)
isPremium: true nếu học viên đăng ký gói cao cấp, false nếu thường
contact: có thể là email (string) hoặc số điện thoại (number) → dùng union type

*/
export { }
type TStudent = {
    id: number,
    name: string,
    email: string,
    isPremium: boolean,
    contact: string | number // union type
}
const student1: TStudent = {
    id: 1,
    name: "Nguyễn Văn A",
    email: "A@gmail.com",
    isPremium: true,
    contact: "A@gmail.com"
}
const student2: TStudent = {
    id: 2,
    name: "Nguyễn Văn B",
    email: "B@gmail.com",
    isPremium: false,
    contact: 1234567890
}

/*
2.Tạo một đối tượng khóa học (course) có thông tin:
courseId: số nguyên (number)
title: tên khóa học (string)
price: giá gốc (number)
students: danh sách học viên đã đăng ký → mảng object chứa học viên 

*/
type TCourse = {
    courseId: number,
    title: string,
    price: number,
    students: TStudent[]
}
const myCourse1: TCourse = {
    courseId: 101,
    title: "TypeScript Basics",
    price: 100,
    students: []
}
const myCourse2: TCourse = {
    courseId: 102,
    title: "React Basics",
    price: 200,
    students: []
}
/*
3.Viết hàm registerStudentToCourse(student, course)
Chức năng: Thêm học viên vào danh sách của khóa học.

*/

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
    course.students.push(student);
    return course;
}
/*
 4.Viết hàm printCourseInfo(course)
Chức năng:
In ra tên khóa học và số học viên đã đăng ký.
Nếu chưa có học viên → in "Chưa có học viên nào."
Nếu có học viên → liệt kê tên từng học viên.

 */
const printcourseInfo = (course: TCourse) => {
    console.log(`Tên khóa học: ${course.title}`);
    console.log(`Số học viên đã đăng ký: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log("Chưa có học viên nào.");
    }
    else {
        console.log("Danh sách học viên:");
        course.students.forEach((student) => {
            console.log(`- ${student.name}`)
        })
    }
}

const updateCourse1 = registerStudentToCourse(student1, myCourse1);
printcourseInfo(updateCourse1);
registerStudentToCourse(student2, myCourse1);