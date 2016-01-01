#!/usr/bin/env node

'use strict';

var config = require('./lib/config');
var persister = require('./lib/persister');

var argv = require('minimist')(process.argv.slice(2));


function runCommand(command) {
  try {
    require('./sub/' + command)(argv);
  } catch (e) {
    console.error(e);
    console.error('Error: did not recognize options ' + JSON.stringify(argv));
    require('./sub/help')();
  }
}

// Run help without checking config or updating in case something bad has happened
var command = argv._[0];
if (argv.h || argv.help || command === 'help') {
  require('./sub/help')(argv);
  return;
}

// Auto-update
var lastUpdated = persister.readLastUpdated();
if (!lastUpdated.timestamp) {
  persister.writeLastUpdated({ timestamp: Date.now(), by: 'auto' });
} else if (Date.now() - lastUpdated.timestamp > 7 * 1000 * 60 * 60 * 60 * 24) {
  
  require('./sub/update')();
}

// Don't check config if they're updating config
if (command === 'init') {
  require('./sub/init')(function () { });
  return;
}

// Check config before running command so all commands are guaranteed to have valid config
if (!config.isValid()) {
  console.error('There is a problem with your config; running example-sub init to set up config');
  require('./sub/init')(function () {
    runCommand(command);
  });
  return;
}

runCommand(command);
