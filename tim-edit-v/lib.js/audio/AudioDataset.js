const path = require('path');
const WaveFile = require('wavefile');

class AudioDataset {
    constructor(dataArray, paths) {
        this._set = [];
        dataArray.forEach(data => {
            try {
                const wav = new WaveFile(data);
                this._set.push({
                    sampleRate: wav.fmt.sampleRate,
                    buffer: wav.toBuffer(),
                });
            } catch (err) {
                throw err;
                console.log(err);
            }
        });

        this._nameIdxs = {};
        paths.forEach((fpath, i) => {
            //console.log(`${i}: ${fpath}: ${this._set[i].sampleRate}`)
            this._nameIdxs[path.basename(fpath).split('.')[0]] = i;
        });
        this._paths = paths;
    }

    get names() {
        return Object.keys(this._nameIdxs);
    }

    idxOf(name) {
        return this._nameIdxs[name];
    }

    slice(idx, sampleFrom, sampleTo) {
        return this._set[idx].buffer.slice(sampleFrom, sampleTo);
        //return this._set[0].buffer.toBuffer().slice(800000,2000000);
    }

    get info() {
        //const infoArray = [];
//
        //this._set.forEach((wav, i) => {
        //    infoArray.push({
        //        name: this._names[i],
        //        container: wav.container,
        //        chunkSize: wav.chunkSize,
        //        chunkId: wav.chunkId,
        //    });
        //});
        //return infoArray;
    }
}

module.exports = AudioDataset;