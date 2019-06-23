import Grid from '../../lib.js/ui/containers/Grid.js';


export const bodyLayout = {
    render() {
        //const container = document.getElementById('grid-container'); // grid-container

        this.activityBarWidth = '64px';
        this.controlPanelWidth = '256px';

        const grid = new Grid(`body-layout`);
        grid.setStyle({
            zIndex: 10,
            position: 'fixed',
            width: '100wv',
            height: '100vh',
            gridTemplateColumns: `${this.activityBarWidth} ${this.controlPanelWidth} auto`,
            gridTemplateRows: 'auto',
            // backgroundColor: 'gray'
        });
        this.grid = grid;
        
        return grid.elem;
    },

    get leftPanelsWidth() {
        return `${parseInt(this.activityBarWidth) + parseInt(this.controlPanelWidth)}px`;
    }
}