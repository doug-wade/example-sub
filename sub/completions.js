'use strict';

/**
 * Gets autocompletions.
 * Usage:
 *      example
 *      # press tab key to get completions
 */
module.exports = ({ argv, logger, sub }) => {
  return new Promise((resolve, reject) => {
    sub.get().then((commands) => {
      commands.forEach((s) => logger.bare(s));
      resolve();
    }, reject);
  });
};
