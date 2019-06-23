import Grid from '../../../lib.js/ui/containers/Grid.js';

export const audioTab = {
    render() {
        this.grid = new Grid('audio-tab');
        //this.grid.classList.add('control-pnl');

        const labelHeight = '32px';
        const inputHeight = '32px';

        this.grid.setStyle({
            gridTemplateColumns: `auto`,
            gridTemplateRows: `48px ` + `${labelHeight} ${inputHeight} `.repeat(4) + ' auto'
        });

        let i = 2;
        this.grid.putAll(
            [[1, i++, 1, 1], `<label for="slice-time-margin">Slice time margin:</label>`],
            [[1, i++, 1, 1], `<input id="slice-time-margin" type="number" value="0" min="0" max="1000" step="0.1">`],
        );

        this.init();

        return this.grid.elem;
    },

    init() {
        this.onSliceTimeMarginChange = () => {};
        this.sliceTimeMarginInput = this.grid.elem.querySelector('#slice-time-margin');
        this.sliceTimeMarginInput.onchange = (e) => this.onSliceTimeMarginChange(parseFloat(e.target.value));
    }
}