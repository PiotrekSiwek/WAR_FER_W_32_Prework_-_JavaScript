const n = 3;
const calc = [];
// Piszcie kod pod tym komentarzem.


for (let i = 0; i < n; i++) {
    calc[i] = [];
    for (let j = 0; j < n; j++) {
        let counter = ((i + 1) + "x" + (j + 1) + "=" + (i + 1) * (j + 1));
        let result = counter.toString();
        calc[i].push(result);
    }
}

for (let i = 0; i < n; i++) {
    console.log(calc[i][0] + "|" + calc[i][1] + "|" + calc[i][2]);
}


