console.log("video 103: interfaces in TypeScript");
const user = {
    name: "khoi",
    age: 21,
    language: "TypeScript",
    sayhi: () => {
        console.log("Hello, I am " + user.name);
    },
    skills: ["JavaScript", "TypeScript", "React"]
};
user.sayhi();
user.skills?.forEach((skill) => {
    console.log(skill);
});
const user2 = {
    name: "nguyen van khoi",
    age: 21,
    address: "Ha Noi",
    language: "javascript",
    sayhi: () => {
        console.log("Hello, I am " + user2.name);
    }
};
const myDog = {
    name: "Buddy",
    breed: "Golden Retriever",
};
export {};
