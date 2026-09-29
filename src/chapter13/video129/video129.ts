export { }

console.log("video 129: Generic interface typescript");

interface IDataString {
    data: string;
}

interface IDataNumber {
    data: number;
}

const data1: IDataString = { data: "Hello" };
const data2: IDataNumber = { data: 123 };

interface IData<T> {
    data: T;
}

const data3: IData<string> = { data: "World" };
const data4: IData<number> = { data: 456 };

interface IAIPResponse<T> {
    status: number;
    data: T
}
interface IUser{
    id:number;
    name:string;
    email:string;
}
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users")
    const dataAPI = await res.json() as IUser[];
    const result: IAIPResponse<IUser[]> = {
        status: res.status,
        data: dataAPI
    };
    return result;
    // tại sao console.log(result) lại không chạy được ở đây, mà phải chạy ở dưới fetchUsers() mới chạy được?
    // vì fetchUsers() là một hàm async, nó trả về một Promise. Khi bạn gọi fetchUsers(), nó sẽ trả về một Promise và không chờ đợi kết quả bên trong hàm. Do đó, nếu bạn đặt console.log(result) bên trong fetchUsers(), nó sẽ không được thực thi ngay lập tức mà chỉ khi Promise được giải quyết (resolved).
 

}
fetchUsers().then((result)=>{
    console.log(result);

});