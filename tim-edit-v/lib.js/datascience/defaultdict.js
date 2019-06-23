function defaultdict(value) {
    return new Proxy({}, {
        get: function(obj, prop) {
            if (!(prop in obj)) {
                obj[prop] = value;
            }
            return obj[prop];
        }
    });
}