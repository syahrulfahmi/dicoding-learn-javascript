class Car {
    constructor(brand, color, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.chassisNumber = chassisNumber;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`)
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reverse`)
    }
}

const car = new Car("Toyota", "Red", 1234)
car.drive()
car.reverse()