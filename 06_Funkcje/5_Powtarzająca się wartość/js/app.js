function indexOfRepeatedValue(array) {
    let firstIndex;
    for (let i = 0; i < array.length; i++) {
        firstIndex = firstIndexBefore(array, i);
        if (firstIndex != null) {
            console.log(firstIndex);
            return firstIndex;
        }

    }
}

function firstIndexBefore(array, index) {
    let value = array[index];
    for (let j = 0; j < index; j++) {
        if (value === array[j]) {
            return j;
        }
    }
    return null;

}

const numbers = [1, 7, 2, 4, 3, 4, 5, 9, 8];

indexOfRepeatedValue(numbers);

const numbers2 = [2, 4, 5, 2, 5, 5, 1, 2, 4];

indexOfRepeatedValue(numbers2);