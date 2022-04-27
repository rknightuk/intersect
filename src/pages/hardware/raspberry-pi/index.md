---
title: Raspberry Pi
---

I have a couple of Raspberry Pis around. My only successful, and lasting, project was setting up [RetroPie](https://retropie.org.uk/) for emulating older games.

## Setup Notes

A lot of this is redundant if you use [Raspberry Pi Imager](https://www.raspberrypi.com/software/) as you can press `⌘⇧ + x` to change passwords and add wifi details before writing a new image.

### Add Wi-Fi Credentials

Create a file called `wpa_supplicant.conf` at the root and add the following:

```txt
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=<Country Code>

network={
     ssid="<SSID>"
     psk="<PASSWORD>"
     scan_ssid=1
}
```

### Enable SSH

- Add a file called `ssh` to the root of the image after writing
- SSH in once booted with `ssh pi@raspberrypi.local`
- Password is `raspberry`

### Change SSH Password

Run `passwd` then choose a new password

## Links

- [maxbbraun/pisight: Apple iSight with a Raspberry Pi inside](https://github.com/maxbbraun/pisight)
- [Pimoroni: Raspberry Pi, Adafruit, micro:bit, and Arduino in the UK](https://shop.pimoroni.com/)
- [RetroPie - Retro-gaming on the Raspberry Pi](https://retropie.org.uk/)
- [Pi-hole – Network-wide protection](https://pi-hole.net/)
- [PiBakery - The blocks based, easy to use setup tool for Raspberry Pi](https://pibakery.org/)
- [Harry Potter and the Real-Life Weasley Clock - Raspberry Pi](https://www.raspberrypi.org/blog/harry-potter-real-life-weasley-clock/)
- [MagicMirror²](https://magicmirror.builders/)
- [Build a Truly Pocket-Sized Video Game Console with a Raspberry Pi Zero](https://lifehacker.com/build-a-truly-pocket-sized-video-game-console-with-a-ra-1775832832)
- [Raspberry Pi Twitter Monitor - learn.sparkfun.com](https://learn.sparkfun.com/tutorials/raspberry-pi-twitter-monitor)
- [MichMich/MagicMirror: MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.](https://github.com/MichMich/MagicMirror)
- [Five Best Raspberry Pi Cases](https://lifehacker.com/five-best-raspberry-pi-cases-1574306176)
- [Mount a Raspberry Pi-Powered Google Calendar On Your Wall](https://lifehacker.com/mount-a-raspberry-pi-powered-google-calendar-on-your-wa-1484219113)
- [I designed and printed a working Simpsons TV. Plays the first 11 seasons at random without internet. Knobs work too! : 3Dprinting](https://www.reddit.com/r/3Dprinting/comments/p9lasb/i_designed_and_printed_a_working_simpsons_tv/h9yj3c3/)
- [Stream-Pi Home - StreamDeck alternative](https://stream-pi.com/)
- [Freenove Robot Dog Kit](https://www.amazon.co.uk/dp/B08C254F73/ref=cm_sw_r_cp_api_glt_fabc_ZKCQAVJGR3K7ZNR1BBSF)
- [rahul-thakoor/balena-rpiplay: Turn a Raspberry Pi into an Airplay server using RPiPlay to enable screen mirroring on tvs, monitors and projectors.](https://github.com/rahul-thakoor/balena-rpiplay)
- [Now Playing: My Raspberry Pi Weekend Project • chorus.fm](https://chorus.fm/news/now-playing-my-raspberry-pi-weekend-project/)
- [Raspberry Pi displays album art on LED matrix - Raspberry Pi](https://www.raspberrypi.com/news/raspberry-pi-displays-album-art-on-led-matrix/)
- [My Inky Dashboard - Matthew Somerville](https://dracos.co.uk/wrote/inky-dashboard/)
- [sPot: Spotify in a 4th-gen iPod (2004) | Details | Hackaday.io](https://hackaday.io/project/177034-spot-spotify-in-a-4th-gen-ipod-2004/details)
- [Raspberry Pi Zero W turns iPod Classic into Spotify music player - Raspberry Pi](https://www.raspberrypi.com/news/raspberry-pi-zero-w-turns-ipod-classic-into-spotify-music-player/)
- [Build a Raspberry Pi powered live train station sign for your desk](https://www.balena.io/blog/build-a-raspberry-pi-powered-train-station-oled-sign-for-your-desk/)
- [soinkleined/busstop: Realtime London bus stop information from TFL, on a raspberry pi, on your desktop.](https://github.com/soinkleined/busstop)
- [rpilocator - Raspberry Pi stock tracker](https://rpilocator.com)
- [Home Assistant](https://www.home-assistant.io/)
- [Using a Raspberry Pi as a NAS macOS Time Machine | JeremyCollins.net](https://jeremycollins.net/using-a-raspberry-pi-as-a-nas-mac-os-time-machine)
- [I made a (swiss german) word clock](https://www.reddit.com/r/RASPBERRY_PI_PROJECTS/comments/omzttm/i_made_a_swiss_german_word_clock/)
- [LED Matrix - Weather Ticker :)](https://www.reddit.com/r/RASPBERRY_PI_PROJECTS/comments/okxxip/led_matrix_weather_ticker/)
- [Pi Pico OLED Clock Example – Rod's Connection Strings](https://connection.rnascimento.com/2021/02/18/pi-pico-oled-clock-example/)
- [WIP Portal desktop calendar](https://www.reddit.com/r/RASPBERRY_PI_PROJECTS/comments/qujt3i/wip_portal_desktop_calendar/)
- [PIVPN: Simplest way to setup a VPN](https://www.pivpn.io/)
- [Cacti® - The Complete RRDTool-based Graphing Solution](https://cacti.net/)
- [nomachinez/pidisplay dashboard](https://github.com/nomachinez/pidisplay)
- [A privacy-first, open-source home assistant | Gladys Assistant](https://gladysassistant.com/)