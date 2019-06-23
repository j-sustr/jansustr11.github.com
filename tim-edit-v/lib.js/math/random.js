function randomInt(min, max) {
    return Math.floor(min + (Math.random() * (max-min))); 
}

function arrayOfRandomInts(size=100, min=0, max=100) {
    const arr = new Array(size);
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = randomInt(min, max);
    }
    return arr;
}

module.exports = {
    randomInt,
    arrayOfRandomInts,
}