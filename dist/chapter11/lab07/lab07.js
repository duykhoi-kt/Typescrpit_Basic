console.log("lab 07");
// gọi API từ một API và hiển thị dữ liệu trong console
const fetchBlogs = async () => {
    const res = await fetch(" http://localhost:8000/blogs");
    const data = await res.json();
    console.log(data);
    const tableBlog = document.getElementById("blogs");
    if (data && data.length > 0) {
        data.forEach((blog) => {
            tableBlog.innerHTML += `
                <tr>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                </tr>
            `;
        });
    }
};
fetchBlogs();
export {};
