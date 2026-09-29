console.log("video 94:  Objects Types");
// optional properties là những thuộc tính không bắt buộc phải có trong object. Khi khai báo một object, bạn có thể chỉ định một số thuộc tính là optional bằng cách sử dụng dấu hỏi (?) sau tên thuộc tính
const student1 = {
    name: "eric",
    id: 123
};
const student2 = {
    name: "Alice",
    id: 456,
    phone: 12342154
};
const person = {
    name: "Alice",
    age: 30,
    address: {
        town: "New York",
        country: "USA"
    },
    isStudent: false
};
const printInfo = (people) => {
    console.log(`Name: ${people.name}`);
    console.log(`Age: ${people.age}`);
    console.log(`Town: ${people.address.town}`);
    console.log(`Country: ${people.address.country}`);
    console.log(`Is Student: ${people.isStudent}`);
};
printInfo(person);
export {};
