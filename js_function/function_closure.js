function init() {
    const name = "Fahmi";

    function sayHello() {
        console.log(`Hello, ${name}`);
    }

    return sayHello;
}

const myFunction = init()
myFunction()