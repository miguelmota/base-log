# base-log

> Returns the logarithm of a number (y) with specified base (x). (ie. log<sub>x</sub>Y).

# Install

```bash
npm install base-log
```

```bash
bower install base-log
```

# Usage

`baseLog(base, number) => logarithm`

```javascript
const baseLog = require('base-log');

console.log(5, 25)); // 2
console.log(7, 49)); // 2
console.log(baseLog(2, 8)); // 3
console.log(baseLog(4, 64)); // 3
cosnole.log(baseLog(2, 16)); // 4
```

# Test

```bash
npm test
```

# License

MIT
