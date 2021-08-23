---
title: JXA
---

## Notes

JXA = JavaScript for Automation

## Run Shell Script

```js
const app = Application.currentApplication();
app.includeStandardAdditions = true;
const path = app.doShellScript('pwd');
```

## Write to a File

```js
const path = '/Users/foo/info.txt'
const dataToWrite = 'this is some text'
const file = app.openForAccess(Path(path), { writePermission: true })
app.setEof(file, { to: 0 })
app.write(dataToWrite, { to: file, startingAt: app.getEof(file) })
app.closeAccess(file)
```

## Read plist file

```js
const data = se.propertyListFiles.byName(`path/to/info.plist`).contents.value()
```

## Open Calendar at Date

```js
var app = Application.currentApplication()
app.includeStandardAdditions = true
var Calendar = Application("Calendar")
var date = new Date()
Calendar.switchView({ to: "day view" })
Calendar.viewCalendar({ at: date })
```

## Links

- [JXA Cookbook](https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/Foreword)
- [A Beginners Guide to JXA, JavaScript Application Scripting](https://computers.tutsplus.com/tutorials/a-beginners-guide-to-javascript-application-scripting-jxa--cms-27171)
- [Mac Automation Scripting Guide: About Mac Scripting](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html)
- [Getting Started with JavaScript for Automation on Yosemite - MacStories](https://www.macstories.net/tutorials/getting-started-with-javascript-for-automation-on-yosemite/)
