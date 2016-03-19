// --------------------
// co-series-bluebird module
// --------------------

// modules
var series = require('co-series'),
    Bluebird = require('bluebird');

// exports
module.exports = series.use(Bluebird);
