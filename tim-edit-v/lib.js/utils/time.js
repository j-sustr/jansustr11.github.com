
export function parseTimeHMSTMS(str) {
    let [hms, tms] = str.split('.');
    tms = parseInt(tms);
    let [h, m, s] = hms.split(':');
    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);
    return (3600 * h + 60 * m + s) * 10000 + tms;
}

export function tmsToHMSTMS(tms) {
    let h = Math.floor(tms / 36000000);
    tms -= (h * 36000000);
    let m = Math.floor(tms / 600000);
    tms -= (m * 600000);
    let s = Math.floor(tms / 10000);
    tms -= (s * 10000);

    h = h.toString().padStart(2, '0');
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');
    tms = tms.toString().padStart(4, '0');

    return `${h}:${m}:${s}.${tms}`;
}

export function milisecondsToHMSMS(duration) {
    let hours = Math.floor(duration / 3600000);
    duration -= (hours * 3600000);
    let minutes = Math.floor(duration / 60000);
    duration -= (minutes * 60000);
    let seconds = Math.floor(duration / 1000);
    duration -= (seconds * 1000);
    let milliseconds = duration;

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export function timestamp() {
    return new Date().toISOString().replace(/[:\.]/g, '-');
}


export function timeStringToMiliseconds(str) {
    const parts = str.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseFloat(parts[2]);
    return Math.trunc(1000 * (3600 * hours + 60 * minutes + seconds));
}