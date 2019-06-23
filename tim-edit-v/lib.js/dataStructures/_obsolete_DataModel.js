/*
    1. nejdriv load jsonStr
    2. az se nacte okno, tak initFromJSON (notifications)

    loadAppData
    saveAppData

    

*/


class DataModel {
    /*
        dataItem {
            value: 
            validate: f(value),  // spise jen pro vývoj  (validace bude v renderer)
            onUpdate: f(value)  // volitelne
            notifyUpdate: f(id, value)   // ozameni o zmene (pokud je null, tak se bere vychozi)
        }
    */
    constructor() {
        this._defaultNotifyUpdate = (id, value) => { // mainWindow.
            throw new Error(`"notifyUpdate" function is not set`);
        }
        this._dataMap = new Map();
        //this._validations = new Map();
    }

    set defaultNotifyUpdate(value) {
        this._defaultNotifyUpdate = value;
    }

    has(id) {
        return this._dataMap.has(id);
    }

    get(id) {
        if (this._dataMap.has(id)) {
            return this._dataMap.get(id).value;
        } else {
            throw new Error(`Accessing undefined data "${id}".`);
            //return undefined;
        }
    }

    set(id, value) { // update
        const dataMapItem = this.safeGet(id);

        if (value === dataMapItem.value) {
            return;
        }

        if (dataMapItem.hasOwnProperty("validate")) {
            if (dataMapItem.validate(value)) {
                throw new Error(`Setting data "${id}" to invalid value "${value}"`);
            }
        }
        if (dataMapItem.hasOwnProperty("onUpdate")) {
            dataMapItem.onUpdate(value);
        }
        if (dataMapItem.hasOwnProperty("notifyUpdate")) {
            dataMapItem.notifyUpdate(id, value);
        } else {
            this._defaultNotifyUpdate(id, value);
        }

        dataMapItem.value = value;
    }

    safeGet(id) {
        let dataMapItem = this._dataMap.get(id);
        if (!dataMapItem) {
            dataMapItem = { value: undefined }
            this._dataMap.set(id, dataMapItem);
        }
        return dataMapItem;
    }

    setValidation(id, validate) {
        const dataMapItem = this.safeGet(id);
        dataMapItem["validate"] = validate;
    }

    onUpdate(id, callback) {
        const dataMapItem = this.safeGet(id);
        dataMapItem["onUpdate"] = callback;
    }

    notifyUpdate(id, notify) {
        const dataMapItem = this.safeGet(id);
        dataMapItem["notifyUpdate"] = notify;
    }

    fromObject(obj, mark=null) { // itemy nactene z objektu se oznaci jako ukladaci
        for (let id of Object.keys(obj)) {
            this.set(id, obj[id]);
            if (mark) {
                const dataMapItem = this.safeGet(id);
                dataMapItem["mark"] = mark;
            }
            //this._dataMap.set(key, obj[key]);
        }
    }

    toObject(mark=null) {
        let obj = Object.create(null);
        for (let [id, item] of this._dataMap) {
            // We don’t escape the key '__proto__' which can cause problems on older engines
            if (mark) {
                if (item.mark === mark) {
                    obj[id] = item.value;
                }
            } else {
                obj[id] = item.value;
            }
        }
        return obj;
    }
}

module.exports = DataModel;