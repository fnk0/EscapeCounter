/**
 * Created by marcus on 10/30/16.
 */

var menubar = require('menubar');
var path = require('path');

var options = {
    tooltip: 'Escape Counter!',
    width: 200,
    height: 200
};

var mb = menubar(options);
module.exports = mb;