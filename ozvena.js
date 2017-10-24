
//  Ozvena

let prehratVychozi = true;
let vychoziZvukFile = null;

let zpozdeniOzveny = 0;
let pocetOzven = 0;
let hlasitostOzveny = 0;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let source;

const hlasitostOzvenyElement = document.getElementById("hlasitostOzveny");
const zpozdeniOzvenyElement = document.getElementById("zpozdeniOzveny");
const pocetOzvenElement = document.getElementById("pocetOzven");

const prehratBtn = document.getElementById("prehrat");
const stopBtn = document.getElementById("stop");

const zvukovySouborElement = document.getElementById("zvukovySoubor");

(function () {
    const vyberSouboruElements = document.forms['vyberSouboruForm'].elements['vyberSouboru'];

    zvukovySouborElement.style.visibility = "hidden";

    for (var i = 0, len = vyberSouboruElements.length; i < len; i++) {
        vyberSouboruElements[i].onclick = function () {
            if (this.value == "0") {
                prehratVychozi = true;
                zvukovySouborElement.style.visibility = "hidden";
            }
            else {
                prehratVychozi = false;
                zvukovySouborElement.style.visibility = "visible";
            }
        };
    }

    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () { return false; };
    }
}());

// detect IE8 and above, and edge
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    prehratVychozi = false;
    zvukovySouborElement.style.visibility = "visible";
    document.getElementById("vyberSouboruDiv").style.display = "none";
} else {
    vychoziZvukFile = dataURLtoFile(zvukDataURL, "zkouskaOzveny");
}
 

function nactiZvukovaData(prehrajCallback) {

    //"use strict";

    const fileReader = new FileReader();

    fileReader.onload = function () {
        let audioData = fileReader.result;
        audioCtx.decodeAudioData(audioData, prehrajCallback,
            function (e) { 
                alert("Chyba při dekódování zvukových dat: " + e.err); 
            }
        );
    };

    if(prehratVychozi) {
        fileReader.readAsArrayBuffer(vychoziZvukFile);
    }
    else {
        fileReader.readAsArrayBuffer(zvukovySouborElement.files[0]);
    }
        
}

function vytvorOzvenu(buffer, hlasitostOzveny, zpozdeniOzveny, pocetOzven) {
    
    const delkaNewBuffer = Math.round(buffer.length * (pocetOzven + 1) * zpozdeniOzveny + buffer.length * 0.5);
    const newBuffer = audioCtx.createBuffer(1, delkaNewBuffer, buffer.sampleRate);

    const channel = 0;
    const bufferChannel = buffer.getChannelData(channel);
    const newBufferChannel = newBuffer.getChannelData(channel);

    let zpozdeniPrvniOzvenySamples = Math.round(buffer.length * zpozdeniOzveny);
    let zpozdeniOzvenySamples = 0;

    for (let i = 0; i < newBuffer.length; i++) {
        newBufferChannel[i] = 0;
    }

    let zesileni = 1;

    for (let i = 0; i <= pocetOzven; i++) {
        zpozdeniOzvenySamples = Math.round(i * zpozdeniPrvniOzvenySamples);

        if(i > 0) zesileni *= hlasitostOzveny;

        for (let j = 0; j < buffer.length; j++) {
            newBufferChannel[zpozdeniOzvenySamples + j] += bufferChannel[j] * zesileni;
        }
    }

    return newBuffer;
}

function prehrajZvukovaData(buffer) {

    source = audioCtx.createBufferSource();
    source.buffer = buffer;

    source.connect(audioCtx.destination);
    source.loop = false;

    source.onended = function () {
        prehratBtn.removeAttribute('disabled');
    }

    source.start(0);
}


prehratBtn.onclick = function () {
    zpozdeniOzveny = parseFloat(zpozdeniOzvenyElement.value) * 0.01;
    pocetOzven = Math.round(parseFloat(pocetOzvenElement.value));
    hlasitostOzveny = parseFloat(hlasitostOzvenyElement.value) * 0.01;

    nactiZvukovaData(function (buffer) {
        prehrajZvukovaData(vytvorOzvenu(buffer, hlasitostOzveny, zpozdeniOzveny, pocetOzven));
    });
    //source.start(0);
    prehratBtn.setAttribute('disabled', 'disabled');
}

stopBtn.onclick = function () {
    source.stop(0);
    prehratBtn.removeAttribute('disabled');
}

function dataURLtoFile(dataURL, filename) {
    var arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}