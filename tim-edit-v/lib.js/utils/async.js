

const delay = (seconds) => new Promise((resolve) => {
    setTimeout(resolve, seconds*1000);
});


module.exports = {
    delay
}