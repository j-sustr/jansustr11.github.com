import TableView from '../../../lib.js/ui/table/TableView.js';
import ColumnView from '../../../lib.js/ui/table/ColumnView.js';
import ObservableTable from '../../../lib.js/dataStructures/ObservableTable.js';
import { tmsToHMSTMS } from '../../../lib.js/utils/time.js';
import { timTableControl } from './timTableControl.js';


export const timTable = {

    render() {
        this.table = document.createElement('table');
        this.table.id = 'tim-table';

        this.init();

        return this.table;
    },

    init() {
        this.onPlayAudioSlice = () => { };


        const tableViewConfig = {
            showRowIndex: true,
        }
        
        const model = new ObservableTable();
        model.colTypes = ['number', 'number', 'string', 'string'];
        model.typeCheck = true;
        const view = new TableView(model, this.table, tableViewConfig);


        const playBtn = (c) => { return () => `<div class="tbl-btn play ${c}">play</div>`; }
        const editTimeBtnPair = (c) => { return () => `<div class="tbl-btn-pair ${c}"><div class="tbl-btn edit time-up">▴</div><div class="tbl-btn edit time-down">▾</div></div>`};
        //const editWordBtn = (c) => { return () => `<div class="tbl-btn edit ${c}">✎</div>`; }
        //const insertRowBtn = (c) => { return () => `<div class="tbl-btn insert ${c}">+</div>`; }
        //const deleteRowBtn = (c) => { return () => `<div class="tbl-btn delete ${c}">x</div>`; }

        const columnViews = [
            //new ColumnView('id', 'Id'),
            new ColumnView('', '', playBtn('')),
            new ColumnView('timeStart', 'TimeStart', tmsToHMSTMS),
            new ColumnView('', '', editTimeBtnPair('start-time')),
            new ColumnView('timeEnd', 'TimeEnd', tmsToHMSTMS),
            new ColumnView('', '', editTimeBtnPair('end-time')),
            new ColumnView('wordG', 'WordG'),
            //new ColumnView('', '', editWordBtn()),
            new ColumnView('wordP', 'WordP'),
            //new ColumnView('', '', editWordBtn()),
            //new ColumnView('', '', insertRowBtn()),
            //new ColumnView('', '', deleteRowBtn()),
        ];

        model.setColKeys(columnViews.map(col => col.key).filter(key => !!key));
        view.assignColumns(columnViews);
        view.build();

        view.on('rows-inserted', (r, n) => {
            console.log(`inserted ${n} rows at ${r}`);
        });
        view.on('rows-deleted', (start, end) => {
            console.log(`deleted rows from ${start} to ${end}`);
        });

        this.model = model;
        this.view = view;

        timTableControl.init(this, model, view);
        this.control = timTableControl;
    },

    openTim(tim) {
        this.control.edits = new Map(); // při otevření nového timu vyčistit edits

        const keys = tim.colKeys;
        let eRows = tim.rows[Symbol.iterator]();
        this.model.deleteRows();
        this._appendRows(eRows, keys);
    },

    async _appendRows(eRows, keys) {
        const batchLenght = 100;
        let batch;
        let row;

        const appendBatch = () => {
            batch = [];
            while (batch.length < batchLenght) {
                row = eRows.next() //rowGen.next();
                if (row.done) {
                    this.model.insertRows(this.model.numRows, batch, keys); // insert rows to model
                    return;
                }
                batch.push(row.value);
            }
            //console.log(JSON.stringify(batch))
            this.model.insertRows(this.model.numRows, batch, keys);
            setTimeout(appendBatch, 100);
        }

        appendBatch();
    },
}