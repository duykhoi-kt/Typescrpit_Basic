const handleDeleteBlog = () => {
    const deleteBtns = document.querySelectorAll(".delete-blog");
    console.log(deleteBtns);
    deleteBtns.forEach((btn) => {
        acctionDelete(btn);
    });
};
const acctionDelete = (btnElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
            // Gọi API xóa blog
            const response = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Cannot delete blog: ${response.status} ${response.statusText}`);
            }
            // show toast
            // @ts-ignore
            const toast = new bootstrap.Toast("#deleteBlogToast");
            toast.show();
            // remove row
            const row = btnElement.closest("tr");
            if (row) {
                row.remove();
            }
        }
    });
};
export { handleDeleteBlog, acctionDelete };
