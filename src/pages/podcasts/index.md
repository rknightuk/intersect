---
title: Podcasts
---

I listen to podcasts with [Overcast](https://overcast.fm) on my iPhone.

Most of the podcasts I listen to are from [Relay](https://relay.fm) and [The Incomparable](https://www.theincomparable.com/). Exceptions to this:

- [Accidental Tech Podcast](https://atp.fm/)
- [AppStories](https://appstories.net/)
- [Unhelpful Suggestions](https://unhelpful-suggestions.com/)
- [Hello Internet](https://www.hellointernet.fm/)

Hello Internet has an RSS issue where only the last 100 show up. Here is [a feed of episodes 1-50 of Hello Internet](https://github.com/yottalogical/hello-internet-archive) that you can subscribe to. I also have my own archive of all the episodes.

I also have my own podcast, [Ruminate](https://ruminatepodcast.com). Read my [notes on podcast production](/podcasts/production).

## Appearances

### Guest

- [‎The ADR Podcast 73: Back to the Future](https://podcasts.apple.com/us/podcast/the-adr-podcast/id880852027)
- [CMD Space #8: The iPhone 5 Event, with Stephen Hackett](https://www.relay.fm/cmdspace/8) (1h08m)

### Notable Mentions

- [Analog(ue) #10: It’s an Internet Show for the Radio](https://www.relay.fm/analogue/10) (2:45) - "_my favourite piece of follow up_". [Myke](https://twitter.com/imyke) got his age wrong and I pointed it out
- [Connected #9: A War of Semantics](https://www.relay.fm/connected/9) (5:30) - "_Why does everyone know this Robb guy_" - [Viticci](https://twitter.com/viticci)
- [Back to Work #546: Snow Day for Nerds](http://5by5.tv/b2w/546) - Merlin and Dan recommending TrackerZapper

## Podcast Apps

- [Overcast](https://overcast.fm)
- [PocketCasts](https://www.pocketcasts.com)
- [Castro](https://castro.fm)

## Get Incomparable Titles and Links

Used when generating the initial versions of my [Defocused list on Letterboxd](https://letterboxd.com/rknightuk/list/defocused-podcast/).

```js
titles = document.getElementsByClassName('asset-name entry-title')

data = []
for (var i = 0; i < titles.length; i++) {
    const title = titles[0].innerText
    const link = titles[i].children[0].href
    data.push({ title, link })
}
```

## Links

- [Podcast Postcards](http://www.podcastpostcards.com/)
- [Making Overcast, Instapaper & Tumblr: A Top Dev Interview With Marco Arment | raywenderlich.com](https://www.raywenderlich.com/1211-making-overcast-instapaper-tumblr-a-top-dev-interview-with-marco-arment)
- [The Gear I Use – 512 Pixels / Stephen Hackett](https://512pixels.net/gear/)
- [What’s Special About Podcasting – 512 Pixels / Stephen Hackett](https://512pixels.net/2015/12/whats-special-about-podcasting/)
- [How I Became an Independent Podcaster on Apple Podcasts - Myke Hurley](https://podcasts.apple.com/us/podcast/how-i-became-an-independent-podcaster/id975601115?mt=2)
- [Listen to podcasts at whatever speed you want – Marco.org](https://marco.org/2015/02/17/listen-to-podcasts-at-whatever-speed-you-want)
- [The Podcast Guest Guide](https://antonyjohnston.com/podcastguestguide/)
- [Subscribe to a podcast from the beginning - ⏪ rewind.website](https://rewind.website/)
- [Podcast Search](https://podsearch.david-smith.org/)
- [Castopod by Ad Aures | Your Free & Open-source Podcast Host](https://castopod.org/)
- [Podcast de facto Standard](https://podcast-standard.org/podcast_standard/)
- [OP3: The Open Podcast Prefix Project](https://op3.dev/)
- [PodUptime | Real time monitoring overview](https://poduptime.com/)
- [Host your podcast 2.0 on Castopod | Castopod.com by Ad Aures](https://castopod.com/en)
