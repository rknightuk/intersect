---
title: Almanac
---

**This project is now deprecated in favour of posting on [my micro.blog](https://toot.rknight.me)**

[View my Almanac](https://almanac.rknight.me)
[View Source on Github](https://github.com/rknightuk/almanac)

Almanac is a micro-blog I built for keeping track of everything I've watched, read, and listened to. It's built with Laravel and uses APIs for different media types to fetch data.

## Post types

Almanac has eight post types:

- Movies
- TV
- Games
- Music
- Books
- Podcasts
- Videos
- Quotes

Most of these types display the same with the exception of quotes; the content of the post is the quote and the title is the "author".

## APIs

- Movies and TV lookup use [The Movie Database API](https://www.themoviedb.org)
- Games lookup uses the [Giant Bomb API](https://www.giantbomb.com/api/)

## Automatic Media Embeds

The post editor supports HTML so any media can be embedded in a post. This section refers only to automatically embedding specific services.

Although automatic media embeds are designed for video and music posts, any post type can automatically embed media by adding a link to a post. The following services are supported:

- YouTube videos
- Vimeo videos
- Spotify tracks, albums and playlists

## Spoilers

If a post contains spoilers there are two options to obscure the post:

- Turning "Spoilers?" on in the post editor. This will obscure all the content of the post.
- Wrapping specific section in `[spoiler]Your Spoiler Here[/spoiler]` will obscure just that section, while leaving the rest of the content available.

Visitors can then click on the spoiler to reveal the contents.

## Tags

Tags can be added in the post editor and all posts for a specific tag can be viewed at `example.com/?tags[]=TAGNAME`

## Rewatches

Almanac will match up previous posts where the same thing has been watched and display this on the site. When visiting a permalink for a post, any other posts related to the same thing will be shown. Posts have a "repost" button  so you can easily repost the same thing, with new content, again.

## Related

- [TV](/tv)
- [Movies](/movies)
- [Gaming](/gaming)
- [Books](/books)

## Links

- [Movie Mash is an self-hosted open source movie tracker](https://moviemash.dotenv.dev/)