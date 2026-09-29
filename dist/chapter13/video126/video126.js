console.log("Sử dụng nhiều Type variable trong TypeScript");
// T là gì => T là một kiểu dữ liệu bất kỳ, nó có thể là number, string, boolean, object, array, v.v...
// U là gì => U là một kiểu dữ liệu bất kỳ, nó có thể là number, string, boolean, object, array, v.v...
function merge(a, b) {
    return [a, b];
}
const a = merge("hoidanit", 25);
const b = merge(10, true);
export {};
