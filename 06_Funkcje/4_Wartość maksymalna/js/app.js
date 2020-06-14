const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

function maxFromArray(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (result <= numbers[i]) {
            result = numbers[i];
        }
    }
    console.log(result);
    return (result);

}


maxFromArray(randomNumbers);
