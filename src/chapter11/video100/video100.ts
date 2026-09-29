export{}

console.log("video100: EnumLiteral types trong TypeScript");

type TRole = string | number;
// literal type là những giá trị cụ thể, không phải kiểu dữ liệu chung
type Tstatus = "ACTIVE" | "INACTIVE" | "PENDING";
const user:TRole = "USER";
const admin:TRole= "ADMIN";
const superAdmin:TRole = "SUPER_ADMIN";

const otherUser:TRole = "";

const status1:Tstatus = "ACTIVE"; 
const status2:Tstatus = "INACTIVE"; 
const status3:Tstatus = "PENDING"; 

enum RoleEnum{
    USER = "USER", // giá trị mặc định là 0
    ADMIN = "ADMIN", // giá trị mặc định là 1
    SUPER_ADMIN = "SUPER_ADMIN" // giá trị mặc định là 2
}
const myRole:RoleEnum =  RoleEnum.USER;

console.log("myRole = ", myRole);

const myRole2:RoleEnum =  RoleEnum.SUPER_ADMIN;
console.log("myRole2 = ", myRole2);