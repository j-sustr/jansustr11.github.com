function createCheckbox() {
    const checkbox = {
        colType: 'custom',
        innerHTML: '',
        style: { // NE
            color: 'white',
            backgroundColor: 'black',
        },
        cellMaker() {
            return `<div class="table-checkbox">play</div>`;
        }
    }
    
}


function createPlayButton(btnClass, srcIdColIdx, timeFromColIdx, timeToColIdx, callback) {
    //const self = this;

    const playButton = {
        colType: 'custom',
        innerHTML: 'play',
        style: { // NE
            color: 'white',
            backgroundColor: 'black',
        },
        onTableEvents: {
            click: (e) => { // eventDelegation
                if (e.target.tagName === "DIV") {
                    if (e.target.classList.contains(btnClass)) {
    
                        // funkce
                        //--------------------------------------
                        console.log('click event', e)
                        // ziskat row id od row id cell  (parent)
                        const cells =  e.target.parentElement.parentElement.cells;
                        //console.log('row', cells[0])
    
                        const srcId = Number.parseInt(cells[srcIdColIdx].innerHTML);
                        const timeFrom = Number.parseInt(cells[timeFromColIdx].innerHTML);
                        const timeTo   = Number.parseInt(cells[timeToColIdx].innerHTML);
                        //const rowIdx = Number.parseInt(cells[0].innerHTML);
                        //--------------------------------------
    
                        console.log('srcId', srcId)
                        console.log('timeFrom timeTo', timeFrom, timeTo)
                        console.log('aaa', cells[srcIdColIdx].firstElementChild)
                        
                        //console.log('timSet.names', getTimSetName[srcId])
    
                        callback(srcId, timeFrom, timeTo);
                    }
                }
            }
        },
        cellMaker() {
            return `<div class="table-play-btn ${btnClass}">play</div>`;
        }
    }
    return playButton;
}


module.exports = {
    createPlayButton: createPlayButton,
};