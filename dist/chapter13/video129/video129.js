console.log("video 129: Generic interface typescript");
const data1 = { data: "Hello" };
const data2 = { data: 123 };
const data3 = { data: "World" };
const data4 = { data: 456 };
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json();
    const result = {
        status: res.status,
        data: dataAPI
    };
    return result;
    // tại sao console.log(result) lại không chạy được ở đây, mà phải chạy ở dưới fetchUsers() mới chạy được?
    // vì fetchUsers() là một hàm async, nó trả về một Promise. Khi bạn gọi fetchUsers(), nó sẽ trả về một Promise và không chờ đợi kết quả bên trong hàm. Do đó, nếu bạn đặt console.log(result) bên trong fetchUsers(), nó sẽ không được thực thi ngay lập tức mà chỉ khi Promise được giải quyết (resolved).
};
fetchUsers().then((result) => {
    console.log(result);
});
export {};
