# GNotifications
Dead Simple, Zero Dependency JS Notifications

*Demo*
Live Example: https://realfresh.github.io/GNotifications/index

## Usage

### 1. Install

Via NPM : [https://www.npmjs.com/package/g-notifications](https://www.npmjs.com/package/g-notifications)
```
npm install --save g-notifications
```

### 2. Import Stylesheet

Either user the css stylesheet from the "dist" directory or import the SASS file from the src folder

### 3. Import / Require In Code

```
var GN = require('g-notifications')
// or
import GN from 'g-notifications'
```

### 4. Use

```
GN.add({type:'success', message: 'Dead simple zero-dep JS notifications!', duration: 5000});
GN.add({type:'error', message: '<h2>Use custom HTML for the message</h2>', duration: 10000})
GN.add({type:'warning', message: 'Careful bro you might break something', duration: 6000, center:false});
```

## API

**GN.add({type, message, duration, center})**

1. type - success, error, warning
2. message - string or HTML
3. duration - millseconds
4. center - true / false (center text, default is true)

**GN.clear()**

Clear all notifications

**Position**

```
GN.options.position = 'top';
GN.options.position = 'bottom';
```
