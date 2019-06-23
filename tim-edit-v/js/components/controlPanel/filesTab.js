import Grid from '../../../lib.js/ui/containers/Grid.js';
import Tim from '../../../lib.js/slp/dataFormats/Tim.js';


export const filesTab = {
    render() {
        this.grid = new Grid('files-tab');
        //this.grid.classList.add('control-pnl');

        const labelHeight = '32px';
        const selectBtnHeight = '32px';

        this.grid.setStyle({
            gridTemplateColumns: `auto`,
            gridTemplateRows: `48px ` + `${labelHeight} ${selectBtnHeight} `.repeat(6) + ' auto'
        });

        let i = 2;
        this.grid.putAll(
            [[1, i++, 1, 1], `<label for="tim-picker">Tim file:</label>`],
            [[1, i++, 1, 1], `<input id="tim-picker" type="file" accept=".tim,.timref,.timform">`],
            [[1, i++, 1, 1], ''],
            [[1, i++, 1, 1], `<label for="wav-picker">Wav file:</label>`],
            [[1, i++, 1, 1], `<input id="wav-picker" type="file" accept=".wav">`],
        );

        this.init();

        return this.grid.elem;
    },

    init() {
        //this.onFilesPicked = () => { };
        this.onTimPicked = () => {};
        this.onWavPicked = () => {};
        
        this.timPicker = this.grid.elem.querySelector('#tim-picker');
        this.wavPicker = this.grid.elem.querySelector('#wav-picker');
        
        this.tim = null;
        this.wav = null;
        
        //const filesPicked = () => this.tim !== null && this.wav !== null;

        this.timPicker.addEventListener('change', (e) => {
            let input = e.target;
            let curFiles = input.files;
            window.curFiles = curFiles
            //let windows1250Decoder = new TextDecoder('windows-1250');
            if (curFiles.length === 0) {

            } else {
                let file = curFiles[0];
                let fileName = file.name;
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.tim = new Tim(e.target.result, fileName);
                    this.onTimPicked(this.tim);
                    //if (filesPicked()) this.onFilesPicked(this);
                }
                reader.readAsText(file, 'windows-1250');
            }

        });

        this.wavPicker.addEventListener('change', (e) => {
            let input = e.target;
            let curFiles = input.files;
            window.curFiles = curFiles
            //let windows1250Decoder = new TextDecoder('windows-1250');
            if (curFiles.length === 0) {

            } else {
                let file = curFiles[0];
                let fileName = file.name;
                let reader = new FileReader();
                let audioContext = new AudioContext();
                reader.onload = async (e) => {
                    try {
                        this.wav = await audioContext.decodeAudioData(e.target.result);
                    } catch (error) {
                        alert(`wav file decoding error`)
                        console.error(`${error}`)
                        return;    
                    }
                    this.onWavPicked(this.wav);
                    //if (filesPicked()) this.onFilesPicked(this);
                }
                reader.readAsArrayBuffer(file);
            }

        });
    },
}