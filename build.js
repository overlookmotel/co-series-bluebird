// --------------------
// co-series-bluebird module
// build script
//
// loads co-series from github and populates test directory with co-series tests
// --------------------

// modules
var pathJoin = require('path').join,
    childProcess = require('child_process'),
    fs = require('fs-extra-promise'),
    Promise = require('bluebird'),
    _ = require('lodash');

// promisified functions
var childProcessExec = Promise.promisify(childProcess.exec);

// get version number of co-series dependency
var version = require('./node_modules/co-series/package.json').version;

var testPath = pathJoin(__dirname, './test'),
    tempPath = pathJoin(__dirname, './temp');

// delete test folder
fs.removeAsync(testPath).then(function() {
    // create temp folder
    return fs.mkdirAsync(tempPath);
}).then(function() {
    // download co-series from GitHub
    var cmd = 'cd ' + tempPath + '; curl -L https://api.github.com/repos/overlookmotel/co-series/tarball/v' + version + ' | tar xzf -';
    return childProcessExec(cmd);
}).then(function() {
    // find download folder inside temp directory
    return fs.readdirAsync(tempPath);
}).then(function(files) {
    var filename = _.find(files, function(filename) {return filename.slice(0, 24) == 'overlookmotel-co-series-';});

    // move tests folder from co-series just downloaded to tests folder for this module
    return fs.renameAsync(pathJoin(tempPath, filename, 'test'), testPath);
}).then(function() {
    // delete temp folder
    return fs.removeAsync(tempPath);
}).then(function() {
    console.log('Build complete');
}).done();
