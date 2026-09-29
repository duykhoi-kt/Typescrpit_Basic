import { addNewRowWithJS } from "./blog.js";
//3, xử lý hành động cập nhật blog
const actionSubmitModal = () => {
    const updateBtn = document.getElementById("btnUpdateBlog");
    if (updateBtn) {
        updateBtn.addEventListener("click", async () => {
            //call update API
            const idElement = document.getElementById("idUpdate");
            const titleElement = document.getElementById("titleUpdate");
            const authorElement = document.getElementById("authorUpdate");
            const contentElement = document.getElementById("contentUpdate");
            const response = await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: idElement.value,
                    title: titleElement.value,
                    author: authorElement.value,
                    content: contentElement.value
                })
            });
            if (!response.ok) {
                throw new Error(`Cannot update blog: ${response.status} ${response.statusText}`);
            }
            // update row , remove current row and add new row
            const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`);
            const row = btnUpdateElement.closest("tr");
            if (row) {
                row.remove();
            }
            addNewRowWithJS({
                id: parseInt(idElement.value),
                title: titleElement.value,
                author: authorElement.value,
                content: contentElement.value
            });
            // close modal
            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
                keyboard: false
            });
            modalBlog.hide();
        });
    }
};
//2. hành động  sự kiện cập nhật blog
const actionUpdate = (btnElement) => {
    btnElement.addEventListener("click", async () => {
        // thiết lập dữ liệu nhập mặc định
        const idElement = document.getElementById("idUpdate");
        const titleElement = document.getElementById("titleUpdate");
        const authorElement = document.getElementById("authorUpdate");
        const contentElement = document.getElementById("contentUpdate");
        // lấy dữ liệu từ thuộc tính data của nút edit
        idElement.value = btnElement.getAttribute("data-update-id");
        titleElement.value = btnElement.getAttribute("data-title");
        authorElement.value = btnElement.getAttribute("data-author");
        contentElement.value = btnElement.getAttribute("data-content");
        // hiển thị modal
        //@ts-ignore
        const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
            keyboard: false
        });
        modalBlog.show();
    });
};
// 1. Xử lý cập nhật blog
const handleUpdateBlog = () => {
    const updateBtns = document.querySelectorAll(".edit-blog");
    if (updateBtns) {
        updateBtns.forEach((btn, index) => {
            const btnElement = btn;
            actionUpdate(btnElement);
        });
    }
};
export { actionUpdate, actionSubmitModal, handleUpdateBlog };
