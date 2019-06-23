import Grid from '../../lib.js/ui/containers/Grid.js';


export const activityBar = {
    render() {
        this.grid = new Grid(`activity-bar`) //.addClass('activity-bar');
        
        const btnSize = '64px';
        
        const btnNames = ['Files', 'Audio', 'Edits'];
        const switchto = ['files-tab', 'audio-tab', 'edits-tab'];

        this.grid.setStyle({
            width: '100%',
            height: '100%',
            gridTemplateColumns: `auto`,
            gridTemplateRows: `${btnSize} `.repeat(btnNames.length) + "auto",
            zIndex: 20,
        });

        btnNames.forEach((name, i) => {
            this.grid.put([1, i + 1, 1, 1], `<button switchto=${switchto[i]}>${name}</button>`);
            this.grid.elem.lastChild.onclick = (e) => {
                const switchtoNow = e.target.getAttribute('switchto');
                Array.from(this.grid.elem.children).forEach((elem, i) => {
                    window.elem = elem
                    if (elem.getAttribute('switchto') === switchtoNow) {
                        elem.classList.add('selected');
                    } else {
                        elem.classList.remove('selected');
                    }
                });
                this.onClick(switchtoNow);
            }
        });

        this.onClick = () => {};

        return this.grid.elem;
    }
}