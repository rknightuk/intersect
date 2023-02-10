---
title: Swift
---

## Strings
### Interpolation

```swift
let name = "Robb"
let myString = "My name is \(name)"
```

### Replacement

```swift
str.replacingOccurrences(of: "this", with: "that")
```

### Split

```swift
myString.components(separatedBy: " ")
```

### Includes

```swift
let myString = "something cool"
// starts with
myString.starts(with: "something")

// contains
myString.contains("something")

// get first or last
myString.prefix(2) // "so"
myString.suffix(2) // "ol"
```

## Arrays

### Join

```swift
myArray.joined(separator: ", ")
```

### Filter

```swift
let filtered = myArray.filter { $0.count > 1 }
```

### Iterate

```swift
for element in elements {
    print(element)
}

// or

elements.forEach { element in
    print(element)
}
```

### Index Exists

```swift
myArray.indices.contains(1)
```

### Length of Array

```swift
myArray.count
```
## Links

- [ios - How to get all Events out of a Calendar (Swift) - Stack Overflow](https://stackoverflow.com/questions/33618685/how-to-get-all-events-out-of-a-calendar-swift)
- [jordansinger/slack-macos-swiftui-sample: Slack macOS Big Sur SwiftUI example app](https://github.com/jordansinger/slack-macos-swiftui-sample)
- [News.swift](https://gist.github.com/jordansinger/838a8f7be874ced4e351e9f07eb26d8e)
- [httpswift/swifter: Tiny http server engine written in Swift programming language.](https://github.com/httpswift/swifter)
- [Recreate - Video series about recreating popular UI with Swift](https://recreatecode.substack.com/)
- [Hacking with Swift](https://www.hackingwithswift.com)
- [How to detect a URL in a String using NSDataDetector - free Swift 5.4 example code and tips](https://www.hackingwithswift.com/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector)
- [JavaScriptCore - NSHipster / Swift](https://nshipster.com/javascriptcore/)
- [Swift and JavaScript interaction - DEV Community](https://dev.to/gualtierofr/swift-and-javascript-interaction-35gm)
