export { }

console.log("video 103: interfaces in TypeScript");

interface IPerson {
    name: string;
    age: number;
    address?: string; // optional property
    readonly language: string; // readonly property
    sayhi: () => void; // method
    // array of strings
    skills?: string[]; // optional property
}
const user: IPerson = {
    name: "khoi",
    age: 21,
    language: "TypeScript",
    sayhi: () => {
        console.log("Hello, I am " + user.name);
    },
    skills: ["JavaScript", "TypeScript", "React"]
}
user.sayhi();
user.skills?.forEach((skill) => {
    console.log(skill);
})
const user2: IPerson = {
    name: "nguyen van khoi",
    age: 21,
    address: "Ha Noi",
    language: "javascript",
    sayhi: () => {
        console.log("Hello, I am " + user2.name);
    }
}

interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
};
