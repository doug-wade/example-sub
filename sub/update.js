'use strict';

var config = require('../lib/config').getConfig();
var execSync = require('child_process').execSync;

/**
 * Updates example-sub by pulling the most recent commit from the master branch of the remote git repository.
 * Usage:
 *     example-sub update
 *     # output from git
 */
module.exports = function () {
  try {
    var dir = execSync('pwd').toString();
    execSync('cd ' + config.repo);
    execSync('git pull origin master');
    execSync('cd ' + dir);
  } catch (err) {
    console.error(err);
  }
};