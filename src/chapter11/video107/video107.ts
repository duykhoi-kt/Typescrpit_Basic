export { }

console.log("video 107")

// gọi API
interface IUser {
    id: number,
    name: string,
    email: string
}
const fetchUsers = async () => {
    const res = await fetch(" http://localhost:8000/users")
    // res.json() trả về một Promise, nên cần dùng await để lấy dữ liệu
    // const data = (await res.json()) as IUser[]
    const data: IUser[] = (await res.json());

    data.forEach(user => {
        console.log(user.id);
        console.log(user.name);
        console.log(user.email);
    });
}
fetchUsers()