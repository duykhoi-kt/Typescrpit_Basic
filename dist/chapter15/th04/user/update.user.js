//3. submit from modal to update user
const submitModalUpdate = () => {
    const updateBtn = document.getElementById("btnUpdateUser");
    if (updateBtn) {
        updateBtn.addEventListener("click", async () => {
            const idElement = document.getElementById("idUpdate");
            const nameElement = document.getElementById("nameUpdate");
            const emailElement = document.getElementById("emailUpdate");
            try {
                const response = await fetch(`http://localhost:8000/users/${idElement.value}`, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: Number(idElement.value),
                        name: nameElement.value,
                        email: emailElement.value
                    })
                });
                if (!response.ok) {
                    throw new Error(`Cannot update user: ${response.status} ${response.statusText}`);
                }
                const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`);
                const row = btnUpdateElement?.closest("tr");
                if (!btnUpdateElement || !row) {
                    throw new Error(`Cannot find the table row for user ${idElement.value}`);
                }
                const cells = row.querySelectorAll("td");
                cells[1].textContent = nameElement.value;
                cells[2].textContent = emailElement.value;
                btnUpdateElement.dataset.name = nameElement.value;
                btnUpdateElement.dataset.email = emailElement.value;
                // @ts-ignore Bootstrap is loaded globally by user.html
                bootstrap.Modal.getOrCreateInstance("#modalUpdateUser").hide();
            }
            catch (error) {
                console.error("Failed to update user.", error);
            }
        });
    }
};
//2. hành động sự kiện cập nhập user
const actionClickUpdate = (btnElemtent) => {
    btnElemtent.addEventListener("click", async () => {
        // thiết lập dữ liệu nhập mặc định
        const idElement = document.getElementById("idUpdate");
        const nameElement = document.getElementById("nameUpdate");
        const emailElement = document.getElementById("emailUpdate");
        // lấy dữ liệu từ thuộc tính data-* của nút edit
        idElement.value = btnElemtent.getAttribute("data-update-id");
        nameElement.value = btnElemtent.getAttribute("data-name");
        emailElement.value = btnElemtent.getAttribute("data-email");
        // hiển thị modal
        //@ts-ignore
        // này là để lấy instance của modal và hiển thị nó
        const modalUser = bootstrap.Modal.getOrCreateInstance('#modalUpdateUser', {
            keyboard: false
        });
        modalUser.show();
    });
};
//1. xử lý cập nhập user
const handleUpdateUser = () => {
    const updateBtns = document.querySelectorAll(".edit-user");
    if (updateBtns) {
        updateBtns.forEach((btn) => {
            const btnElement = btn;
            actionClickUpdate(btnElement);
        });
    }
};
export { submitModalUpdate, handleUpdateUser, actionClickUpdate };
