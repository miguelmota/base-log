const test = require('tape');
const baseLog = require('../base-log');

test('baseLog', function (t) {
  'use strict';

  t.plan(16);

  t.equal(baseLog(), null);
  t.equal(baseLog(2), null);
  t.equal(baseLog(null, 2), null);
  t.equal(baseLog({}), null);
  t.equal(baseLog([]), null);
  t.equal(baseLog(NaN, NaN), null);
  t.notEqual(baseLog(1, 1), NaN); // equal
  t.equal(baseLog(2, 2), 1);
  t.equal(baseLog(3, 27), 3);
  t.equal(baseLog(2, 4), 2);
  t.equal(baseLog(4, 16), 2);
  t.equal(baseLog(4, 64), 3);
  t.equal(baseLog(2, 16), 4);
  t.equal(baseLog(5, 25), 2);
  t.equal(baseLog(7, 49), 2);
  t.equal(baseLog(2, 8), 3);
});
