export { } // là một cách để chỉ định rằng module này không xuất bất kỳ giá trị nào ra ngoài, giúp tránh xung đột tên với các module khác.

console.log("video 95: Type Aliases");
// type alias
type hoidanit = {
    id: string;
    name: string;
    address: string;
    age: number;
}
const student1: hoidanit = {
    id: "123",
    name: "Alice",
    address: "New York",
    age: 20
}