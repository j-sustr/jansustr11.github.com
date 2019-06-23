import AudioPlayer from '../../lib.js/audio/AudioPlayer.js';


export const audioPlayer = {
    init() {
        this.ctx = new AudioContext();
        this.player = new AudioPlayer(this.ctx);
        this.channelData = null;
        this.sampleRate = 0;
        this.sliceTimeMargin = 0;
    },

    setAudioBuffer(audioBuffer) {
        this.sampleRate = audioBuffer.sampleRate;
        this.channelData = audioBuffer.getChannelData(0);
    },

    playSlice(startTime, endTime) {
        if (this.channelData === null) return;
        startTime -= this.sliceTimeMargin;
        endTime += this.sliceTimeMargin;
        let startSample = Math.round(this.sampleRate * startTime);
        let endSample = Math.round(this.sampleRate * endTime);
        let slice = this.channelData.slice(startSample, endSample);
        this.player.stop();
        this.player.play(slice, this.sampleRate);
    }
}

