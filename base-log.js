(function(root) {
  'use strict';

  function baseLog(x, y) {
    if (!(typeof x === 'number' && typeof y === 'number' && !isNaN(x) && !isNaN(y))) {
      return null;
    }

    return Math.log(y) / Math.log(x);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = baseLog;
    }
    exports.baseLog = baseLog;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return baseLog;
    });
  } else {
    root.baseLog = baseLog;
  }

})(this);
