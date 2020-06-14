const array = [];
const cols = 4;
const rows = 5;
// Piszcie kod pod tym komentarzem.

let counter = 1;
for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
        array[i].push(counter);
        counter++;
    }
}
console.log(array);