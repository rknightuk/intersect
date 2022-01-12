---
title: App Development
---

Lots of random notes from building an app. See also [SwiftUI notes](/programming/swift/swiftui/).

## Make  a Release in Xcode

`Product > Archive`

## Remove Unused Simulators from XCode

```bash
xcrun simctl delete unavailable
```

## Adding GitHub Package Dependency

- Personal Access Token must have `repo` access
- Use the SSH GitHub URL and not the HTTPS one, otherwise it will fail `git@github.com:user/repo.git`

## User Settings with UserDefaults

```swift
var userDefaults = UserDefaults.standard

// set default values
userDefaults.register(
    defaults: [
        "enabled": true
    ]
)

// get value
UserDefaults.standard.bool(forKey: "enabled")

// set value
UserDefaults.standard.set(false, forKey: "enabled")
```

## Open a SwiftUI View in Window

```swift
// AboutScreenController.swift
import Cocoa

class AboutScreenController: NSWindowController, NSWindowDelegate {
    override func windowDidLoad() {
        super.windowDidLoad()
    }
}

// AppDelegate.swift
let windowController = AboutScreenController(
    window: NSWindow(
        contentRect: NSRect(x: NSScreen.main!.frame.width/2, y: NSScreen.main!.frame.height/2, width: 300, height: 200),
        styleMask: [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView],
        backing: .buffered, defer: false
    )
)

let aboutView = AboutView()
            
windowController.window?.delegate = windowController
windowController.window?.title = "TrackerZapper"
windowController.window?.contentView = NSHostingView(rootView: aboutView)
windowController.window?.makeKeyAndOrderFront(nil)
NSApp.activate(ignoringOtherApps: true)

// AboutView.swift
import SwiftUI
import Cocoa

struct AboutView: View {
    var body: some View {
        VStack(alignment: .center) {
            Text("This is a window")
        }
        .frame(width: 200, alignment: .top)
        .padding()
    }
}
```

## Show About Window

```swift
// default
NSApplication.shared.orderFrontStandardAboutPanel()

// with options
NSApplication.shared.orderFrontStandardAboutPanel(
    options: [
        NSApplication.AboutPanelOptionKey(rawValue: "Copyright"): "© 2021 Robb Knight"]
)
```

## Links

- [NSApplication.AboutPanelOptionKey - Keys to include in the options dictionary when displaying an About panel.](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey)
- [LostMoa - Customise About Panel on macOS in SwiftUI](https://lostmoa.com/blog/CustomiseAboutPanelOnMacOSInSwiftUI/)
- [Preparing Your App for Distribution | Apple Developer Documentation](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution)
- [Add more information to default "About Panel" in Mac OSX with Credits.rtf](http://www.valentinourbano.com/add-more-informations-to-default-about-panel-in-mac-osx.html)
- [martinlexow/Uberabout: “Uberabout” replaces the default “About” window in your macOS app with an aesthetically pleasing one.](https://github.com/martinlexow/Uberabout)
- [Anagh Sharma / macOS menu bar app with SwiftUI](https://www.anaghsharma.com/blog/macos-menu-bar-app-with-swiftui/)
- [Create a macOS Menu Bar Application Using SwiftUI | by Aaron Wright | Medium](https://medium.com/@acwrightdesign/creating-a-macos-menu-bar-application-using-swiftui-54572a5d5f87)
- [Observe NSPasteboard — Swift 4. How to listen for clipboard changes | by Federico Vitale | Medium](https://medium.com/@fede.vitale/watch-for-nspasteboard-fad29d2f874e)
- [sindresorhus/Preferences: ⚙ Add a preferences window to your macOS app in minutes](https://github.com/sindresorhus/Preferences)
- [sindresorhus/LaunchAtLogin: Add “Launch at Login” functionality to your macOS app in seconds](https://github.com/sindresorhus/LaunchAtLogin)
- [sindresorhus/KeyboardShortcuts: ⌨️ Add user-customizable global keyboard shortcuts to your macOS app in minutes](https://github.com/sindresorhus/KeyboardShortcuts)