export{}

console.log("video 101: tuple types trong TypeScript");

// tuple type là một mảng có số lượng phần tử cố định và kiểu dữ liệu của từng phần tử cũng cố định

type TTuple = [string, number, boolean?];// tuple type có 3 phần tử, phần tử đầu tiên là string, phần tử thứ 2 là number, phần tử thứ 3 là boolean

const test = ["hoidanit",25,true];

const tets1: TTuple = ["hoidanit",25,true];// đúng

const test2: [string, number, boolean] = ["hoidanit",25,true];// đúng   

const test3: TTuple = ["hoidanit",25];// đúng, phần tử thứ 3 là g
// const tets2: TTuple = ["hoidanit",25];// sai, thiếu phần tử thứ 3