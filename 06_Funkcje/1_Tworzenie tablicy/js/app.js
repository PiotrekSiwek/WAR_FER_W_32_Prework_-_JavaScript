function createArray(rows) {
    const array = [];
    for (let i = 1; i <= rows; i++) {
        array.push(i);
    }
    console.log(array);
    return array;
}

let size = 5;
createArray(size);