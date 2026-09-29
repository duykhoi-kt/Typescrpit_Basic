import { ITodo } from "./type";

const removeTodoFromLocalStorage = (id: number) => {
    const todoListStr = localStorage.getItem("todoList");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr) as ITodo[];
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }
}
const handleDeleteTodo = (button: HTMLButtonElement) => {
    const id = button.getAttribute("data-id");

    if (id) {
        removeTodoFromLocalStorage(Number.parseInt(id, 10));

        const row = button.closest("tr");

        if (row) {
            row.remove();
            // @ts-ignore
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance("#liveToastDelete");
            toastBootstrap.show();
        }
    }
};
const deleTodo = () => {
    // biến này có nghĩa là chúng ta đang tìm kiếm phần tử tbody trong bảng có id là tableTodo. Nếu tìm thấy, chúng ta sẽ thêm một sự kiện click vào tbody để xử lý việc xóa todo khi người dùng nhấn nút delete.
    const tableBody = document.querySelector("#tableTodo tbody");

    if (tableBody) {
        tableBody.addEventListener("click", (event) => {
            const target = event.target;
            // kiểm tra xem target có phải là một phần tử HTML hay không. Nếu không, chúng ta sẽ thoát khỏi hàm xử lý sự kiện.
            if (!(target instanceof Element)) {
                return;
            }

            const button = target.closest<HTMLButtonElement>(".delete-todo");

            if (button) {
                handleDeleteTodo(button);
            }
        });
    }
}
export { deleTodo, removeTodoFromLocalStorage, handleDeleteTodo }