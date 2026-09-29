//2. hành động xóa user
const actionClickDelete = (btnDeleteElement) => {
    btnDeleteElement.addEventListener("click", async () => {
        const id = btnDeleteElement.getAttribute("data-delete-id");
        if (id) {
            //call delete API
            await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            // show toast message
            //@ts-ignore
            const toast = new bootstrap.Toast("#deleteUserToast");
            toast.show();
            // remove row from table
            const row = btnDeleteElement.closest("tr");
            if (row) {
                row.remove();
            }
        }
    });
};
//1. Xử lý xóa user
const handleDeleteUser = () => {
    const deleteBtns = document.querySelectorAll(".delete-user");
    deleteBtns.forEach(btn => {
        const btnElement = btn;
        actionClickDelete(btnElement);
    });
};
export { handleDeleteUser, actionClickDelete };
