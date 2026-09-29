export { }
console.log("video 113: thuộc tính và phương thức trong TypeScript");

// xây dựng class chung chung(tổng quát)
class SinhVien {
    // thuộc tính (đặc điểm)
    name: string | undefined;
    id: number | undefined;
    // hành viên
    sleep() {
        console.log("sinh viên đang ngủ", this.name);
    }
}
//object (clone => chitiet cụ thể)
const sv1 = new SinhVien();
sv1.name = "Nguyễn Duy Khôi";
sv1.id = 123456;
sv1.sleep();

console.log("=====================");
const sv2 = new SinhVien();
sv2.name = "Nguyễn Văn A";
sv2.id = 1234;
sv2.sleep();