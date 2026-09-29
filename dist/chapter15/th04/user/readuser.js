//2 . function render Table
const renderTable = (data) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        tbody.innerHTML = "";
        data.forEach(users => {
            tbody.innerHTML +=
                `
                <tr> 
                    <td>${users.id} </td>
                    td>${users.name} </td>
                    <td>${users.email} </td>
                    <td>
                        <button class="btn btn-warning">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            `;
        });
    }
};
//1 . function render Data
const fetchUsersAndDisplayTable = async () => {
    const rest = await fetch('http://localhost:8000/users');
    if (!rest.ok) {
        throw new Error(`Cannot load users: ${rest.status} ${rest.statusText}`);
    }
    const data = await rest.json();
    renderTable(data);
};
export { fetchUsersAndDisplayTable };
