import Grid from '../../../lib.js/ui/containers/Grid.js';


export const editsTab = {
    render() {
        this.grid = new Grid('edits-tab');
        //this.grid.classList.add('control-pnl');
        
        const labelHeight = '32px';
        const inputHeight = '32px';

        this.grid.setStyle({
            gridTemplateColumns: `auto`,
            gridTemplateRows: `48px ` + `${labelHeight} ${inputHeight} `.repeat(4) + ' auto'
        });

        let i = 2;
        this.grid.putAll(
            [[1, i++, 1, 1], `<label for="edit-time-step">Time step:</label>`],
            [[1, i++, 1, 1], `<input id="edit-time-step" type="number" value="0.1" min="0" max="10" step="0.01">`],
            [[1, i++, 1, 1], ``],
            [[1, i++, 1, 1], `<button id="export-edits">Export edits</button>`],
        );

        this.init();

        return this.grid.elem;
    },

    init() {
        this.onTimeStepChange = () => { };
        this.timeStepInput = this.grid.elem.querySelector('#edit-time-step');
        this.timeStepInput.onchange = (e) => this.onTimeStepChange(parseFloat(e.target.value));
        
        //window.timeStepInput = this.timeStepInput;

        this.onExportEditsClick = () => { };
        this.exportEditsBtn = this.grid.elem.querySelector('#export-edits');
        this.exportEditsBtn.onclick = (e) => this.onExportEditsClick();
    }
}