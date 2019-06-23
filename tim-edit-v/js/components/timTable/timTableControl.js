import { tmsToHMSTMS } from '../../../lib.js/utils/time.js';


export const timTableControl = {
    init(timTable, model, view) {
        this.model = model;
        this.view = view;

        this.editTimeStep = 100;
        this.edits = new Map();

        const play = (btn) => {
            let rowIdx = btn.parentElement.parentElement.cells[0].innerHTML - 1;
            let timeStart = this.model.cell(this.model.colIdx('timeStart'), rowIdx);
            let timeEnd = this.model.cell(this.model.colIdx('timeEnd'), rowIdx);
            timTable.onPlayAudioSlice(timeStart, timeEnd);
            //console.log(`rowIdx ${rowIdx}`)
            //window.btn = btn
        }
        const editStartTime = (btn) => {
            let row = btn.parentElement.parentElement.parentElement;
            let rowIdx = row.cells[0].innerHTML - 1;
            let tSCI = this.model.colIdx('timeStart');
            let tECI = this.model.colIdx('timeEnd');
            let dir = btn.classList.contains('time-up') ? -1 : 1;
            if (rowIdx !== 0) {
                row.previousElementSibling.classList.add('edit');
                this.model.setCell(tECI, rowIdx - 1, this.model.cell(tECI, rowIdx - 1) + this.editTimeStep * dir);
                this.edits.set(`${rowIdx}:time-end`, tmsToHMSTMS(this.model.cell(tECI, rowIdx - 1))); // mark edit
            }
            row.classList.add('edit');
            this.model.setCell(tSCI, rowIdx, this.model.cell(tSCI, rowIdx) + this.editTimeStep * dir);
            this.edits.set(`${rowIdx + 1}:time-start`, tmsToHMSTMS(this.model.cell(tSCI, rowIdx))); // mark edit
            //window.btn = btn
        }
        const editEndTime = (btn) => {
            let row = btn.parentElement.parentElement.parentElement;
            let rowIdx = row.cells[0].innerHTML - 1;
            let tECI = this.model.colIdx('timeEnd');
            let tSCI = this.model.colIdx('timeStart');
            let dir = btn.classList.contains('time-up') ? -1 : 1;
            row.classList.add('edit');
            this.model.setCell(tECI, rowIdx, this.model.cell(tECI, rowIdx) + this.editTimeStep * dir);
            this.edits.set(`${rowIdx + 1}:time-end`, tmsToHMSTMS(this.model.cell(tECI, rowIdx))); // mark edit
            if (rowIdx !== this.view.numRows - 1) {
                row.nextElementSibling.classList.add('edit');
                this.model.setCell(tSCI, rowIdx + 1, this.model.cell(tSCI, rowIdx + 1) + this.editTimeStep * dir);
                this.edits.set(`${rowIdx + 2}:time-start`, tmsToHMSTMS(this.model.cell(tSCI, rowIdx + 1))); // mark edit
            }
            //window.btn = btn
        }

        this.view.body.onclick = (e) => {
            const target = e.target;
            if (target.classList.contains('tbl-btn')) {
                if (target.classList.contains('play')) {
                    play(target);
                } else if (target.classList.contains('time-up') || target.classList.contains('time-down')) {
                    let btnPair = target.parentElement;
                    if (btnPair.classList.contains('start-time')) {
                        editStartTime(target);
                    } else if (btnPair.classList.contains('end-time')) {
                        editEndTime(target);
                    }
                }
            }
        }
    }
}