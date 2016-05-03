'use strict';

/**
 * Returns a random number between 0 and the argument value
 * Usage:
 *      sub random 100
 *      > 80.6944249663502
 */
module.exports = function ({ argv, logger }){
  return new Promise((resolve, reject) => {
    logger.info(Math.random() * (+argv._[1]));
    resolve();
  });
};
