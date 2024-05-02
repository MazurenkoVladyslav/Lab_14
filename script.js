function findUnique(arr) {

    const counts = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (counts[element]) {
            counts[element]++;
        } else {
   
            counts[element] = 1;
        }
    }

    for (const key in counts) {
        if (counts[key] !== 1) {
            return false;
        }
    }

    return true;
}

function getNumbersFromUser() {
    const numbersString = prompt('Введіть числа, розділені комами:', '');
    const numbersArray = numbersString.split(',').map(Number);
    return numbersArray;
}

const userInputArray = getNumbersFromUser();
console.log(findUnique(userInputArray));
