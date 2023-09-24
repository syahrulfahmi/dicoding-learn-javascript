class MyCar {
    #chassisNumber = null;

    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
        this.#chassisNumber = this.#generateChassisNumber();
    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        return console.log("not allowed")
    }

    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`)
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reverse`)
    }
}

const car = new MyCar("Honda", "red")
console.log(car.chassisNumber)