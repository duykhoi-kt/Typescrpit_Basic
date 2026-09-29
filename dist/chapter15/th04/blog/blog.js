import { acctionDelete, handleDeleteBlog } from "./deleteBlog.js";
import { actionSubmitModal, actionUpdate, handleUpdateBlog } from "./updateBlog.js";
const renderTable = (data) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        tbody.innerHTML = "";
        data.forEach((blog, index) => {
            tbody.innerHTML += `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td>${blog.content}</td>
                        <td style="display: flex; gap: 10px;">
                            <button 
                                class="btn btn-warning edit-blog"
                                data-update-id = "${blog.id}"
                                data-title = "${blog.title}"
                                data-author = "${blog.author}"
                                data-content = "${blog.content}"
                                >
                                Edit
                            </button>
                            <button class="btn btn-danger delete-blog" data-id=${blog.id}>Delete</button>
                        </td>
                    </tr>
            `;
        });
    }
};
const fetchBlogs = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    if (!res.ok) {
        throw new Error(`Cannot load blogs: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    renderTable(data);
};
export const addNewRowWithJS = (blog) => {
    const tableBody = document.querySelector("#tableBlog tbody");
    if (tableBody) {
        // tạo một hàng mới
        const newRow = document.createElement("tr");
        // gán HTML cho hàng mới
        newRow.innerHTML = `
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td style="display: flex; gap: 10px;">
                    <button 
                        class="btn btn-warning edit-blog"
                        data-update-id = "${blog.id}"
                        data-title = "${blog.title}"
                        data-author = "${blog.author}"
                        data-content = "${blog.content}"
                        >
                        Edit
                    </button>
                    <button class="btn btn-danger delete-blog" data-id=${blog.id}>Delete</button>
                </td>
            `;
        // thêm hàng mới vào bảng
        tableBody.appendChild(newRow);
        // gán sự kiện onclick cho row vừa tạo
        const btnDelete = newRow.querySelector(".delete-blog");
        if (btnDelete) {
            acctionDelete(btnDelete);
        }
        const btnUpdate = newRow.querySelector(".edit-blog");
        if (btnUpdate) {
            actionUpdate(btnUpdate);
        }
    }
};
const handleCreateBlog = () => {
    const btnCreate = document.getElementById("saveBlog");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const titleInput = document.getElementById("title");
            const authorInput = document.getElementById("author");
            const contentInput = document.getElementById("content");
            const title = titleInput.value;
            const author = authorInput.value;
            const content = contentInput.value;
            // kiểm tra dữ liệu đầu vào
            if (!title || !author || !content) {
                alert("Please fill in all fields.");
                return;
            }
            // call create API
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });
            if (!rawResponse.ok) {
                throw new Error(`Cannot create blog: ${rawResponse.status} ${rawResponse.statusText}`);
            }
            const res = await rawResponse.json(); // {id: 1, title: '...', author: '...', content: '...'}
            console.log(res);
            addNewRowWithJS(res);
            //close modal
            // @ts-ignore
            const modalBlog = bootstrap.Modal.getOrInstance('#modalBlog', {
                keyboard: false
            });
            modalBlog.hide();
            // show toast
            // @ts-ignore
            const toast = new bootstrap.Toast("#createBlogToast");
            toast.show();
            // clear input fields
            titleInput.value = "";
            authorInput.value = "";
            contentInput.value = "";
        });
    }
};
fetchBlogs().then(() => {
    handleDeleteBlog();
    handleUpdateBlog();
});
handleCreateBlog();
actionSubmitModal();
