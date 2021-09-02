---
title: Electron
---

## Open Links in Browser

```js
window.webContents.on('new-window', function(e, url) {
  e.preventDefault()
  require('electron').shell.openExternal(url)
})
```

## Change Menu Labels

Rebuild the menu when it changes. Not recommended.

```js
contextMenu.items[0].label = 'New Label'
contextMenu = Menu.buildFromTemplate(contextMenu.items)

// show on click after
tray.popUpContextMenu(contextMenu)
```

## Show Context Menu on Right Click

```js
const contextMenu = Menu.buildFromTemplate(...)

tray.on('right-click', function (event) {
    tray.popUpContextMenu(contextMenu)
})
```

## Store User Data

Adapted from [How to store user data in Electron](https://medium.com/cameron-nokes/how-to-store-user-data-in-electron-3ba6bf66bc1e) article.

```js
const { app } = require('electron');
const path = require('path');
const fs = require('fs');

const DEFAULTS = {
    enabled: true,
}

class Store {
    constructor() {
        const userDataPath = (app || remote.app).getPath('userData');
        this.path = path.join(userDataPath, 'prefs.json');
        this.data = parseDataFile(this.path);
    }

    get(key) {
        return this.data[key];
    }

    set(key, val) {
        this.data[key] = val;
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}

function parseDataFile(filePath, defaults) {
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        return DEFAULTS;
    }
}

module.exports = Store;
```

## Links

- [electron-clipboard-watcher - npm](https://www.npmjs.com/package/electron-clipboard-watcher)
- [maxogden/menubar: high level way to create menubar desktop applications with electron](https://github.com/maxogden/menubar)