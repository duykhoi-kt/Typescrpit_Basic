
import { deleTodo } from "./dele_Todo.js";
import { getRandomInt } from "./helper.js";
import { displayTable } from "./table_todo.js";
import { ITodo } from "./type.js";

const btnElement = document.getElementById("btnCreateTodo") as HTMLButtonElement;

btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName") as HTMLInputElement;
    if (inputElement) {
        const name = inputElement.value;
        // save todo to localStorage
        const newTodo = {
            id: getRandomInt(1, 100),
            name: name

        };
        // tạo hàm xử lý lưu trữ todo vào localStorage
        handleSaveTodoLocalStorage(newTodo);
        handleAddNewithJS(newTodo);
        //close the modal
        // @ts-ignore
        // hàm getOrCreateInstance() của bootstrap.Modal sẽ trả về một instance của modal, nếu chưa có thì sẽ tạo mới
        const createTodoModal = bootstrap.Modal.getOrCreateInstance('#createTodo', {
            keyboard: false,
        })
        // hàm hide() của bootstrap.Modal sẽ ẩn modal
        createTodoModal.hide();

        // clear input
        inputElement.value = "";
        //show toast
        // @ts-ignore
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance("#liveToast") 
        toastBootstrap.show()

    }
})

const handleSaveTodoLocalStorage = (todo: ITodo) => {
    // kiểm tra sự tồn tại của todo
    if (!todo) {
        console.error("Invalid todo");
        return;
    }
    // lưu todo vào localStorage
    const todosStr = localStorage.getItem("todoList");
    if (todosStr) {
        // nếu tồn tại todoList trong localStorage thì parse nó ra và thêm todo mới vào
        const todosArr = JSON.parse(todosStr) as ITodo[];
        // thêm todo mới vào mảng todosArr
        todosArr.push(todo);
        // lưu mảng todosArr vào localStorage
        localStorage.setItem("todoList", JSON.stringify(todosArr));
    } else {
        //Tạo todoList mới và lưu vào localStorage
        localStorage.setItem("todoList", JSON.stringify([todo]))

    }
}
const handleAddNewithJS = (todo: ITodo) => {
    const tableBody = document.querySelector('#tableTodo tbody') as HTMLTableSectionElement;

    const todoListStr = localStorage.getItem("todoList");

    let index = 0;

    if (todoListStr) {
        index = JSON.parse(todoListStr).length - 1;
    }

    // tạo phần tử dòng mới
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${todo.id}</td>
        <td>${todo.name}</td>
        <td>
            <button class="btn btn-danger delete-todo" data-id="${todo.id}">
                Delete
            </button>
        </td>
    `;

    // thêm dòng mới vào bảng
    tableBody.appendChild(newRow);

};
displayTable();

deleTodo();

