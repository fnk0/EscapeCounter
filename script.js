/**
 * Created by marcus on 10/30/16.
 */

"use strict";
var fs = require('fs');
var counter = 0;
var path = require('path');
var countFile = path.join(__dirname, 'count.txt');
var app = require('electron').remote.app;

document.getElementById('close').onclick = function(){
    app.quit();
};

var readFile = function() {
    fs.readFile(countFile, function(err, data) {
        counter = data;
        document.getElementById('counter').innerHTML = "" + counter;
    });
};

readFile();

fs.watchFile(countFile, function(curr, prev) {
    readFile();
});

