var executor = new java.util.concurrent.Executors.newScheduledThreadPool(1);
var counter = 1;
var ids = {};

var setTimeout = function(fn, delay) {
    var id = counter++;
    var runnable = new JavaAdapter(java.lang.Runnable, {run: fn});
    ids[id] = executor.schedule(runnable, delay, 
        java.util.concurrent.TimeUnit.MILLISECONDS);
    return id;
}

var clearTimeout = function(id) {
    ids[id].cancel(false);	
    executor.purge();
    delete ids[id];
    return 0;
}

var setInterval = function(fn, delay) {
    var id = counter++;
    var runnable = new JavaAdapter(java.lang.Runnable, {run: fn});
    ids[id] = executor.scheduleAtFixedRate(runnable, delay, delay, 
        java.util.concurrent.TimeUnit.MILLISECONDS);
    return id;
}

exports.setTimeout = setTimeout;
exports.setInterval = setInterval;
exports.clearTimeout = clearTimeout;
exports.clearInterval = clearTimeout;
