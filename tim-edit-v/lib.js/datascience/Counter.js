
class Counter {
    constructor(iterable) {
        for (const val of iterable) {
            this[val] = (this[val] || 0) + 1;
        }
    }

    toArray() {
        let arr = [];
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                arr.push([key, this[key]]);
            }
        }
        return arr;
    }

    mostCommon(n) {
        let arr = this.toArray();
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, n);
    }

    numBuckets() {
        let num = 0;
        for (const key in this) {
            if (this.hasOwnProperty(key)) num++;
        }
        return num;
    }

    //array.forEach(val => this[val] = (this[val] || 0) + 1);
}

/*

function Counter(iterable) {
    for (const val of iterable) {
        this[val] = (this[val] || 0) + 1;
    }
    //array.forEach(val => this[val] = (this[val] || 0) + 1);
}*/


//var list = ['a', 'b', 'c', 'b', 'a', 'b', 'c', 'a', 'a', 'a'];
//
//console.log(new Counter(list))