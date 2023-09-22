const profile = {
    firstName: "Syahrul",
    age: 20
}

let firstName = "Fahmi";
let age = 30;
({ firstName, age } = profile);

console.log(firstName, age);