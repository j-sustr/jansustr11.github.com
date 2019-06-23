
export function weightedChoice(arr, p) {
    let sum = 0, r = Math.random();
    for (let i = 0, I = arr.length; i < I; i++) {
        sum += p[i];
        if (r <= sum) return arr[i];
    }
}

/*
let randomCheck = { 0: 0, 1: 0, 2: 0, };

for (let i = 0, I = 1000000; i < I; i++) {
    randomCheck[weightedChoice([0,1,2], [0.1, 0.7, 0.2])]++
}

console.log(randomCheck)
*/

