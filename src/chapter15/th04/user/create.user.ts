import { actionClickDelete } from "./delete.user.js";
import { actionClickUpdate } from "./update.user.js";
import { IUser } from "./user.js";
//2. add new row with js
const addNewRowWithJS = (users: IUser) => {
    const tablebody = document.querySelector("#tableBlog tbody");
    if (tablebody) {
        // create a new row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${users.id}</td>
            <td>${users.name}</td>
            <td>${users.email}</td>
            <td>
                <button class="btn btn-warning edit-user"
                    data-update-id="${users.id}"
                    data-name="${users.name}"
                    data-email="${users.email}">
                    Edit
                </button>
                <button class="btn btn-danger delete-user" data-delete-id="${users.id}">Delete</button>
            </td>
        `;
        tablebody.appendChild(newRow);
        // gán sự kiện onclick cho row vừa tạo 
        // mục đích là để khi click vào nút delete hoặc edit thì sẽ gọi đến hàm xử lý tương ứng
        const btnDeleteElement = document.querySelector(`[data-delete-id="${users.id}"]`);
        actionClickDelete(btnDeleteElement as HTMLButtonElement);
        const btnUpdateElement = document.querySelector(`[data-update-id="${users.id}"]`);
        actionClickUpdate(btnUpdateElement as HTMLButtonElement);
    }
}





//1. submit from modal to create new user
 const submitModalCreate = () => {
    const btnCreate = document.getElementById("btnCreateUser");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const nameInput = document.getElementById("name")! as HTMLInputElement;
            const emailInput = document.getElementById("email")! as HTMLInputElement;

            const name = nameInput.value;
            const email = emailInput.value;

            if (!name || !email) {
                alert("Please fill in all fields.");
                return;
            }
            // call create API
            const rawResponse = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            if (!rawResponse.ok) {
                throw new Error(`Cannot create user: ${rawResponse.status} ${rawResponse.statusText}`);
            }

            const res: IUser = await rawResponse.json(); // {id: 1, name: '...', email: '...'}
            //add new row with js
            addNewRowWithJS(res);
            // clear the form before closing so the next open starts empty
            nameInput.value = "";
            emailInput.value = "";

            // close modal
            // @ts-ignore Bootstrap is loaded globally by user.html
            const modalCreateUser = bootstrap.Modal.getOrCreateInstance("#modalCreateUser", {
                keyboard: false
            });
            modalCreateUser.hide();

            // show toast
            // @ts-ignore
            const toast = new bootstrap.Toast("#createUserToast");
            toast.show();
        })
    }
}

export { submitModalCreate, addNewRowWithJS }