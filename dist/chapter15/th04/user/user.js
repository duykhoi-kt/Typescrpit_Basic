import { fetchUsersAndDisplayTable } from "./read.user.js";
import { submitModalCreate } from "./create.user.js";
import { handleUpdateUser, submitModalUpdate } from "./update.user.js";
import { handleDeleteUser } from "./delete.user.js";
fetchUsersAndDisplayTable().then(() => {
    handleUpdateUser();
    handleDeleteUser();
});
submitModalCreate();
submitModalUpdate();
