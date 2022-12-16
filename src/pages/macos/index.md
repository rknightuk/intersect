---
title: MacOS
---

I use MacOS as my primary OS on a 2019 16" MacBook Pro.

There are a number of tweaks and settings I toggle on a fresh install which you can view [in my dot files](https://github.com/rknightuk/dotfiles/blob/master/osx/set-defaults.sh). These dotfiles also include scripts to install all of the apps and command line tools I use.

## Dock

I have my dock hidden with no apps in it by default. I launch everything with [Alfred](/macos/alfred)

## Apps

You can view a close-to-up-to-date list of apps I install in my [brewfile on GitHub](https://github.com/rknightuk/dotfiles/blob/master/homebrew/Brewfile).

I use [1Password](https://1password.com/) to manage my passwords, credit cards, and software licences.

Notes, Reminders, Mail and Safari are all my defaults for those tasks.

## Menu Bar Apps

[Gitify](https://www.gitify.io/) puts your Github notifications in the menu bar. Way better than endless emails.

[Batteries for Mac](https://www.fadel.io/batteries) shows battery status of my MacBook, keyboard, mouse, and iPhone.

[Fantastical](https://flexibits.com/fantastical) is an excellent calendar app. It does have a full app but I never use that.

[xbar](https://xbarapp.com) (formally BitBar) "_lets you put the output from any script/program in your macOS menu bar._". I have two plugins: microphone mute and now playing. [View my xbar plugins on Github](https://github.com/rknightuk/xbar-plugins). [SwiftBar](https://github.com/swiftbar/SwiftBar) is another version of BitBar although it wasn't compatible with my plugins.

[CleanShot X](https://cleanshot.com) for screenshots, screen recording, and annotation.

I show and hide certain menu bar apps and icons with [Bartender](https://www.macbartender.com/).

## Adding Custom Alert Sounds

Put the audio files in `~/Library/Sounds` and they show up in Preferences > Sound > Sound Effects.

## List All URL Schemes

```bash
/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump URLSchemeBinding
```

[URL Scheme Alfred workflow](https://github.com/rknightuk/alfred-workflows/tree/main/workflows/url-schemes)

## Add App to Finder Toolbar

<kbd>command ⌘</kbd> and drag the app to to Finder toolbar to pin it there.

## Developer Folder

[~./Developer has a special icon on MacOS](https://twitter.com/a_grebenyuk/status/1458249706220527616)

## Zoom in Preview

[Press <code>`</code> to toggle it](https://twitter.com/codepo8/status/1511650091425222657)

## Remove background in Preview

1. Select 'Markup'
2. Select 'Auto Alpha' 
3. Click and drag down to select the desired background
4. Press delete on the keyboard 
5. Repeat steps 3 & 4 if necessary

Source: [10 Tips - Preview the Mac app people forget about](https://www.fourth-wall.co.uk/post/10-tips-for-preview-the-default-mac-app-that-people-forget-about#viewer-cdv6n)

## Built in speed test

```bash
networkQuality -v
```

## Keyboard Navigation in Modals

[System Settings > Keyboard > Keyboard Navigation](https://twitter.com/wesbos/status/1602324079482118145)

## Links

- [MacStories](https://www.macstories.net/)
- [Six Colors – Apple, technology, and other stuff by Jason Snell & Dan Moren](https://sixcolors.com/)
- [Mac Power Users Podcast](https://www.relay.fm/mpu)
- [Chrome is Bad](https://chromeisbad.com/)
- [Setting up your home Mac for remote file access – Six Colors](https://sixcolors.com/post/2015/07/setting-up-your-home-mac-for-remote-file-access/)
- [Honk Sound Effect](https://twitter.com/davidcelis/status/1189702177435947009)
- [dhanishgajjar/terminal-icons: Beautiful icons for your favourite terminal apps like Hyper and iTerm2](https://github.com/dhanishgajjar/terminal-icons)
- [Setapp | The best apps for Mac in one suite](https://setapp.com/)
- [Welcome to Bunch - Bunch.app](https://bunchapp.co/)
- [Cascadea - Remix the web.](https://cascadea.app/)
- [mortenjust/droptogif: Zero-click animated Gifs](https://github.com/mortenjust/droptogif)
- [AirBuddy](https://v2.airbuddy.app/) - Quick AirPods connect
- [gao-sun/eul: 🖥️ macOS status monitoring app written in SwiftUI.](https://github.com/gao-sun/eul)
- [GitPigeon — GitHub notifications for your Mac](https://gitpigeon.com/)
- [MonitorControl/MonitorControl: 🖥 Control your external monitor brightness & volume on your Mac](https://github.com/MonitorControl/MonitorControl)
- [lanayotech/vagrant-manager: Manage your vagrant machines in one place with Vagrant Manager for OS X](https://github.com/lanayotech/vagrant-manager)
- [Mutify for Mac](https://mutify.app/)
- [samuelmeuli/glance: 🔎 All-in-one Quick Look plugin](https://github.com/samuelmeuli/glance)
- [Freezeframe save apps and window positions](https://freeze.app/)
- [Hypercritical: SwitchGlass](https://hypercritical.co/2020/02/12/switchglass)
- [Glimpse: A Free Cross-Platform Photo Editor](https://glimpse-editor.org/)
- [QBlocker | Block CMD+Q Quitting Apps](http://qblocker.com/)
- [Elpass - Personal Digital Vault](https://elpass.app)
- [Sh1d0w/clean-links: What happens in your browser, stays in your browser.](https://github.com/Sh1d0w/clean-links)
- [CleanShot X for Mac](https://cleanshot.com/)
- [Minimalist: Password Manager for iPhone, iPad, Mac, iCloud](https://minimalistpassword.com/)
- [Custom URL Redirects with Rebrandly and Keyboard Maestro — You're Doing That Wrong](https://doingthatwrong.com/home/rebrndkm)
- [CleanShot X – Better Screenshots](https://cleanshot.com)
- [ianyh/Amethyst: Automatic tiling window manager for macOS à la xmonad.](https://github.com/ianyh/Amethyst)
- [How to Set up Time Machine Server – 512 Pixels](https://512pixels.net/2018/08/how-to-set-up-time-machine-server/)
- [1Piece - Multifunctional App for Mac](https://app1piece.com/)
- [Unite for macOS - Single Site Browser](https://www.bzgapps.com/unite)
- [Sleeve — Now playing on your Desktop](https://replay.software/sleeve)
- [Maccy - macOS clipboard manager](https://maccy.app/)
- [Jayson - Powerful JSON viewer and editor](https://jayson.app/)
- [Tailscale · Best VPN Service for Secure Networks](https://tailscale.com/)
- [How to Screen Share on a Mac Remotely or Locally : HelloTech How](https://www.hellotech.com/guide/for/how-to-screen-share-on-mac-remotely-locally)
- [Remove the proxy icon hover delay in Big Sur - BrettTerpstra.com](https://brettterpstra.com/2020/12/02/remove-the-proxy-icon-hover-delay-in-big-sur/)
- [TableFlip - Simple Table Editor for Mac](https://tableflipapp.com/)
- [Maestral - Dropbox client for macOS and Linux](https://maestral.app/)
- [Bespoke Synth app](https://www.bespokesynth.com/)
- [HEIC Converter | Sindre Sorhus](https://sindresorhus.com/heic-converter)
- [System Color Picker | Sindre Sorhus](https://sindresorhus.com/system-color-picker)
- [Sensei - The Next Generation Mac performance tool](https://sensei.app/)
- [Mimestream | A native macOS email client for Gmail](https://mimestream.com/)
- [jwhamilton99/menu-bar-splitter: a mac utility for keeping your menu bar organized](https://github.com/jwhamilton99/menu-bar-splitter)
- [The secret of the macOS Monterey network quality tool | DanPetrov](https://danpetrov.xyz/macos/2021/11/14/analysing-network-quality-macos.html)
- [GrandPerspective - graphically shows the disk usage within a file system](http://grandperspectiv.sourceforge.net/)
- [Downlink - real-time satellite imagery on your desktop](https://downlinkapp.com/)
- [Reflex - Reflex takes control of your media keys, and directs them to the app of your choosing](https://stuntsoftware.com/reflex/)
- [JackWellborn/Find-and-Paste-URL-from-Browser: A script to quickly return a given url from Safari or Google Chrome.](https://github.com/JackWellborn/Find-and-Paste-URL-from-Browser)
- [Pika color picker • Super High Fives](https://superhighfives.com/pika)
- [Today — Sindre Sorhus](https://sindresorhus.com/today)