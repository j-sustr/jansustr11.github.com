import { PAC_ENG } from '../transcription/phoneneticAlphabet.js';

export default class Vocab {
    constructor(data) {
        this._words = null;
        if (typeof data === "string") {
            this._words = this.parse(data);
        } else if (data instanceof Map) {
            this._words = data;
        }
    }

    get words() { return this._words; }

    parse(strData) {
        let map = new Map();
        let arrOfLines = strData.match(/[^\r\n]+/g);
        arrOfLines.shift();
        let word;
        for (let i = 0, len = arrOfLines.length; i < len; i++) {
            arrOfLines[i] = arrOfLines[i].split(/\s+/);
            arrOfLines[i].shift()
            word = arrOfLines[i].shift();
            map.set(word, arrOfLines[i]);
        }
        return map;
    }

    toHtkString() {
        const TAB = '	';
        const SPACE = ' ';
        let words = [...this._words];
        words.sort((a, b) => {
            if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
            if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
            return 0;
        });
        let strRows = [];
        let word = '';
        let prons = null;
        let phonemes = null;
        for (let i = 0, I = words.length; i < I; i++) {
            word = words[i][0];
            prons = words[i][1];
            for (let j = 0, J = prons.length; j < J; j++) {
                phonemes = prons[j].split('');
                for (let k = 0, K = phonemes.length; k < K; k++) {
                    phonemes[k] = PAC_ENG[phonemes[k]];
                }
                strRows.push([word, phonemes.join(SPACE)].join(TAB));
            }
        }
        strRows.push(`SIL${TAB}si\n`); // za posledním slovem musí být "\n"
        return strRows.join('\n');
    }

    toString() {
        const TAB = '\t';
        let words = [...this._words];
        words.sort((a, b) => {
            if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
            if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
            return 0;
        });
        let strRows = new Array(words.length);
        for (let i = 0, I = words.length; i < I; i++) {
            words[i].unshift(words[i][1].length);
            strRows[i] = words[i].flat().join(TAB);
        }
        strRows.unshift(`Vocabulary_size ${words.length}`);
        return strRows.join('\n');
    }
}