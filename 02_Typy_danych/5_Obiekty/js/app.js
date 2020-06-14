const car = {
    type: "sedan",
    color: "green",
    engine: 2.0
}

const carInfo = car.type + " " + car.color + " " + car.engine;

console.log(carInfo);


const color = {
    red: 100,
    green: 0,
    blue: 50
}
const referenceColor = color;
referenceColor.red = 50;
referenceColor.green = 50;

console.log(color.red);
console.log(color.green);