/**
 * Created by marcus on 10/30/16.
 */

var fs = require('fs');
var mb = require('./app');
var path = require('path');
var gkm = require('gkm');
var countFile = path.join(__dirname, 'count.txt');

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

mb.on('ready', function ready () {
    console.log('app is ready at: ' + mb.app.getAppPath());
    var counter = 0;
    fs.readFile(countFile, function(err, data) {
        counter = parseInt(data);
        if (!isNumber(counter)) {
            counter = 0;
        }
    });

    // Listen to all key events (pressed, released, typed)
    gkm.events.on('key.*', function(data) {
        //console.log(this.event + ' ' + data);
        if (this.event == 'key.released') {
            if (data == "Escape") {
                counter += 1;
                fs.writeFile(countFile, "" + counter, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    //console.log("The file was saved!");
                });
            }
        }
    });
});