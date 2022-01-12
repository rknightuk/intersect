---
title: SwiftUI
---

## Button Opens URL

```swift
Button(action: {
    if let url = URL(string: "https://rknight.me") {
        NSWorkspace.shared.open(url)
   }
}) {
    Text("Website")
        .foregroundColor(Color.blue)
}
```


## Using SF Symbols

```swift
Image(systemName: "bolt.circle")
    .foregroundColor(.yellow)
```

## Centre VStack

```swift
VStack(alignment: .center)
```

## Links

- [LostMoa - Customise About Panel on macOS in SwiftUI](https://lostmoa.com/blog/CustomiseAboutPanelOnMacOSInSwiftUI/)
- [SwiftUI Tutorials | Apple Developer Documentation](https://developer.apple.com/tutorials/swiftui)
- [SwiftUI: Getting Started | raywenderlich.com](https://www.raywenderlich.com/3715234-swiftui-getting-started)
- [Introduction to SwiftUI · Mastering SwiftUI Book - Sample](https://www.appcoda.com/learnswiftui/swiftui-basics.html)
- [SwiftUI by Example - free quick start tutorials for Swift developers](https://www.hackingwithswift.com/quick-start/swiftui)
- [Implementing a drag-and-drop zone in Swift](https://newbedev.com/implementing-a-drag-and-drop-zone-in-swift)
- [SwiftUI: How to drag and drop a contact from Contacts on macOS - Stack Overflow](https://stackoverflow.com/questions/64588583/swiftui-how-to-drag-and-drop-a-contact-from-contacts-on-macos)