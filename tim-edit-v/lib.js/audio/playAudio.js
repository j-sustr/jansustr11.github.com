const AudioPlayer = require('./AudioPlayer');
const { int16ToFloat32 } = require('../utils/typedArray');

const audioCtx = new AudioContext();
const audioPlayer = new AudioPlayer(audioCtx);

function playAudioSliceInt16(slice, frameRate) { 
    audioPlayer.stop();
    let buffer = new Int16Array(slice.buffer);
    buffer = int16ToFloat32(buffer, 0, buffer.length);
    audioPlayer.play(buffer, frameRate);
}

module.exports = {
    playAudioSliceInt16,
    //requestAudioSliceAndPlay: requestAudioSliceAndPlay
}