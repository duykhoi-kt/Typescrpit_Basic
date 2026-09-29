console.log("video100: EnumLiteral types trong TypeScript");
const user = "USER";
const admin = "ADMIN";
const superAdmin = "SUPER_ADMIN";
const otherUser = "";
const status1 = "ACTIVE";
const status2 = "INACTIVE";
const status3 = "PENDING";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["SUPER_ADMIN"] = "SUPER_ADMIN"; // giá trị mặc định là 2
})(RoleEnum || (RoleEnum = {}));
const myRole = RoleEnum.USER;
console.log("myRole = ", myRole);
const myRole2 = RoleEnum.SUPER_ADMIN;
console.log("myRole2 = ", myRole2);
export {};
