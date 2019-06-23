export default class AudioPlayer {
    constructor(ctx) {
        this.ctx = ctx;
        this.source = null;
        this.onended = () => {};
    }

    play(buffer, sampleRate) {
        const newArrayBuffer = this.ctx.createBuffer(1, buffer.length, sampleRate);
        newArrayBuffer.copyToChannel(buffer, 0);

        const source = this.ctx.createBufferSource();
        source.onended = this.onended;

        source.connect(this.ctx.destination);
        source.buffer = newArrayBuffer;
        source.start();
        this.source = source;
    }

    stop() {
        if (this.source) this.source.stop();
    }
}