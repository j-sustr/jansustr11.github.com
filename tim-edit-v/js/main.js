import { bodyLayout } from './components/bodyLayout.js';
import { activityBar } from './components/activityBar.js';
import { controlPanel } from './components/controlPanel/controlPanel.js';
import { timTable } from './components/timTable/timTable.js';
import { audioPlayer } from './components/audioPlayer.js';
import { downloadObjectAsJson } from '../lib.js/utils/html.js';


function main() {
    document.body.prepend(bodyLayout.render());

    bodyLayout.grid.put([1, 1, 1, 1], activityBar.render());
    bodyLayout.grid.put([2, 1, 1, 1], controlPanel.render());

    audioPlayer.init();

    insertAfter(timTable.render(), bodyLayout.grid.elem);
    timTable.view.pinHead();
    timTable.table.style.paddingLeft = bodyLayout.leftPanelsWidth;

    timTable.onPlayAudioSlice = (start, end) => {
        audioPlayer.playSlice(start * 0.0001, end * 0.0001)
        console.log(`play audio ${start} ${end}`);
    }

    controlPanel.openTab('files-tab');

    controlPanel.filesTab.onTimPicked = (tim) => {
        console.log('tim picked')
        timTable.openTim(tim);
    };

    controlPanel.filesTab.onWavPicked = (wav) => {
        console.log('wav picked')
        //window.wav = wav;
        audioPlayer.setAudioBuffer(wav);
    };

    controlPanel.audioTab.onSliceTimeMarginChange = (timeMargin) => {
        audioPlayer.sliceTimeMargin = timeMargin;
    }

    controlPanel.editsTab.onTimeStepChange = (timeStep) => {
        timTable.control.editTimeStep = Math.round(timeStep  * 10000);
    }

    controlPanel.editsTab.onExportEditsClick = () => {
        console.log('export edits')
        if (controlPanel.filesTab.tim && timTable.control.edits) {
            //window.edits = timTable.control.edits;
            exportEdits(controlPanel.filesTab.tim.name, timTable.control.edits);
        }
    }

    activityBar.onClick = (tabName) => {
        console.log(tabName)
        controlPanel.openTab(tabName);
    }

    controlPanel.editsTab.timeStepInput.dispatchEvent(new Event('change'));
    controlPanel.audioTab.sliceTimeMarginInput.dispatchEvent(new Event('change'));

    window.controlPanel = controlPanel;
    window.activityBar = activityBar;
    window.timTable = timTable;
    window.audioPlayer = audioPlayer;
}


function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function exportEdits(name, edits) {
    edits = [...edits];
    let data = { name, edits,};
    downloadObjectAsJson(data, `edits-${name}`);
}


main();
