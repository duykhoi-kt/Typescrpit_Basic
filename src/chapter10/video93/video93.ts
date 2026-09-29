export{}

console.log("video 93: Union type")
// union type
let username: string | number = "hoidanit@gmail.com"; // email
username = 123; // id

const prinfUsername = (username: string | number) => {
    if(typeof username === "string")
    {   
        username.toLocaleLowerCase();
        console.log(`username is string: ${username}`);
    }
    else if(typeof username === "number")
    {
        console.log(`username is number: ${username}`);
    }
}