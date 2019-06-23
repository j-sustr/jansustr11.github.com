import Grid from '../../../lib.js/ui/containers/Grid.js';
import { filesTab } from './filesTab.js';
import { audioTab } from './audioTab.js';
import { editsTab } from './editsTab.js';

export const controlPanel = {
    render() {
        this.grid = new Grid('control-pnl');
        this.grid.setStyle({ gridTemplateColumns: `auto`, gridTemplateRows: 'auto' });
        this.grid.putAll(
            [[1, 1, 1, 1], filesTab.render()],
            [[1, 1, 1, 1], audioTab.render()],
            [[1, 1, 1, 1], editsTab.render()],
        );

        //this.div = document.createElement('div');
        //this.div.id = 'control-pnl';
        
        //this.div.appendChild(filesTab.render());
        //this.div.appendChild(audioTab.render());
        //this.div.appendChild(editsTab.render());
        
        this.filesTab = filesTab;
        this.audioTab = audioTab;
        this.editsTab = editsTab;

        return this.grid.elem;
    },

    openTab(name) {
        Array.from(this.grid.elem.children).forEach(pnl => {
            if (pnl.id === name) {
                pnl.style.visibility = 'visible';
            } else {
                pnl.style.visibility = 'hidden';
            }
        });
    }
}