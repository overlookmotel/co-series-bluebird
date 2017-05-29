# co-series-bluebird.js

[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/co-series-bluebird.svg)](https://greenkeeper.io/)

# Run in series with co and bluebird

## Current status

[![NPM version](https://img.shields.io/npm/v/co-series-bluebird.svg)](https://www.npmjs.com/package/co-series-bluebird)
[![Build Status](https://img.shields.io/travis/overlookmotel/co-series-bluebird/master.svg)](http://travis-ci.org/overlookmotel/co-series-bluebird)
[![Dependency Status](https://img.shields.io/david/overlookmotel/co-series-bluebird.svg)](https://david-dm.org/overlookmotel/co-series-bluebird)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/co-series-bluebird.svg)](https://david-dm.org/overlookmotel/co-series-bluebird)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/co-series-bluebird/master.svg)](https://coveralls.io/r/overlookmotel/co-series-bluebird)

## Usage

This small module shims an asynchronous function to ensure it queues each execution after the the previous execution is complete.

Exactly the same as [co-series](https://www.npmjs.com/package/co-series) but using [bluebird](https://www.npmjs.com/package/bluebird) rather than native JS promises.

Please see documentation for [co-series](https://www.npmjs.com/package/co-series) for more details.

## Tests

Run `npm run build` first, then `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/co-series-bluebird/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/co-series-bluebird/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add an entry to changelog
* add tests for new features
* document new functionality/API additions in README
