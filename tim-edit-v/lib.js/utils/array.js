

function arrayOfBools(length, bool = false) {
    return new Array(length).fill(bool);
}

function add(accumulator, a) {
    return accumulator + a;
}

module.exports = {
    add: add,
}