const electron = require('electron');
const {ipcMain} = electron;


// Singleton
// globalData

// variable adress/mapping/src:  object + key

//ipcMain.emit(id + ':update', value);  // NASTAVIT JAKO CALLBACK A ODSTRANIT ELECTRON IMPORTS

class ChangeNotifier {
    constructor(ipc, symbol=':update') {
        this.ipc = ipc;
        this.symbol = symbol;
        this.variables = {} // ty ktere se daji samostane aktualizovat
    }

    // promenne se vytvori dynamicky

    notifyVarChange(id, value) {
        this.ipc.emit(id + this.symbol, value);
        //ipcMain.emit(id + ':update', value);
    }

    defineVar(id, obj, key, notify=true) { // registerVar
        this.variables[id] = { obj: obj, key: key }
        if (notify) {
            this.notifyVarChange(id, obj[key]);
        }
    }

    setVar(id, value, notify=true) {
        const vari = this.variables[id];
        vari.obj[vari.key] = value;

        if (notify) {
            this.notifyVarChange(id, value)
        }
    }

    getVar(id) {
        const vari = this.variables[id];
        return vari.obj[vari.key];
    }
}

module.exports = ChangeNotifier


