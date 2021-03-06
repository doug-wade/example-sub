#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
  boolean: true,
});

const log = require('./lib/logger');
const logger = log.getLogger(log.getLevelFromArgv(argv));

const persister = require('./lib/persister')({argv, logger});
require('./lib/config')({argv, logger, persister}).getConfig().then((config) => {
  const sub = require('./lib/sub')({argv, logger, persister, config});

  const example = require('.');

  logger.debug('process.argv: ' + JSON.stringify(argv));

  example({ argv, config, logger, persister, sub }).then((result) => {
    process.exit(result); // eslint no-process-exit:0
  });
}, (err) => {
  logger.error('failed to bootstrap config with error: ', err);
});
