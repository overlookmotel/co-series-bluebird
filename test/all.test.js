// --------------------
// co-series-bluebird module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	series = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */

describe('Tests', function() {
	it.skip('all', function() {
		expect(series).to.be.ok;
	});
});
