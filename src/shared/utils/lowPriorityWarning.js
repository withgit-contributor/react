/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule lowPriorityWarning
 */

'use strict';

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 *
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function() {};

if (__DEV__) {
  lowPriorityWarning = function(condition, format, ...args) {
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);
    if (!condition && typeof console !== 'undefined') {
      console.warn(message);
    }
  };
}

module.exports = lowPriorityWarning;
