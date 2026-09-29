console.log("video 107");
const fetchUsers = async () => {
    const res = await fetch(" http://localhost:8000/users");
    // res.json() trả về một Promise, nên cần dùng await để lấy dữ liệu
    // const data = (await res.json()) as IUser[]
    const data = (await res.json());
    data.forEach(user => {
        console.log(user.id);
        console.log(user.name);
        console.log(user.email);
    });
};
fetchUsers();
export {};
