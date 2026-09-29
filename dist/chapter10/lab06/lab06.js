const student1 = {
    id: 1,
    name: "Nguyễn Văn A",
    email: "A@gmail.com",
    isPremium: true,
    contact: "A@gmail.com"
};
const student2 = {
    id: 2,
    name: "Nguyễn Văn B",
    email: "B@gmail.com",
    isPremium: false,
    contact: 1234567890
};
const myCourse1 = {
    courseId: 101,
    title: "TypeScript Basics",
    price: 100,
    students: []
};
const myCourse2 = {
    courseId: 102,
    title: "React Basics",
    price: 200,
    students: []
};
/*
3.Viết hàm registerStudentToCourse(student, course)
Chức năng: Thêm học viên vào danh sách của khóa học.

*/
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
    return course;
};
/*
 4.Viết hàm printCourseInfo(course)
Chức năng:
In ra tên khóa học và số học viên đã đăng ký.
Nếu chưa có học viên → in "Chưa có học viên nào."
Nếu có học viên → liệt kê tên từng học viên.

 */
const printcourseInfo = (course) => {
    console.log(`Tên khóa học: ${course.title}`);
    console.log(`Số học viên đã đăng ký: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log("Chưa có học viên nào.");
    }
    else {
        console.log("Danh sách học viên:");
        course.students.forEach((student) => {
            console.log(`- ${student.name}`);
        });
    }
};
const updateCourse1 = registerStudentToCourse(student1, myCourse1);
printcourseInfo(updateCourse1);
registerStudentToCourse(student2, myCourse1);
export {};
