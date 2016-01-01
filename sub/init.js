'use strict';

var config = require('../lib/config');
var inquirer = require('inquirer');

/**
 * Set up configuration for example-sub. Runs interactive commands to walk you through setting up config.
 * Usage:
 *     example-sub init
 */
module.exports = function (callback) {
  inquirer.prompt([
    {
      default: 'User',
      name   : 'name',
      message: 'Please enter your name'
    }, {
      name   : 'repo',
      message: 'Where did you install example-sub (where is your git repo located)?',
      default: ''
    }
  ], (answers) => {
    config.updateConfig(answers);
    callback();
  });
};
