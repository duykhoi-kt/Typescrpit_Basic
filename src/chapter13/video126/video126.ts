export{}
console.log("Sử dụng nhiều Type variable trong TypeScript");
// T là gì => T là một kiểu dữ liệu bất kỳ, nó có thể là number, string, boolean, object, array, v.v...
// U là gì => U là một kiểu dữ liệu bất kỳ, nó có thể là number, string, boolean, object, array, v.v...
function merge<T,U>(a: T,b:U){
    return [a,b]
}
const a = merge<string,number>("hoidanit",25)
const b = merge<number,boolean>(10,true)
