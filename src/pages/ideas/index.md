---
title: Ideas
---
List of ideas I've either tried, looked into and realised they weren't feasible, or ones I have yet to attempt.

Successful projects live in the [projects section](/projects/) or on [my Github profile](https://github.com/rknightuk?tab=repositories).

## To Investigate

### Open Source Read It Later

I've used [Instapaper](https://instapaper.com) and [Pocket](https://getpocket.com) for a long time but neither of them work as I want. I find them a bit cumbersome and they want to default to offline/reader views and that just isn't something I want to do. Things I want:

- Save link and title
- Inbox
- Archive
- Search titles
- Basic API to get links
- Links in the list should open the original website, always

Things I don't need:

- iOS app (solve saving with a shortcut or bookmarklet)
- Offline/reader views

#### Existing solutions

- [Wallabag](https://wallabag.org/en) seems to be the only option in this space.
- [GoodLinks app](https://wallabag.org/en) overkill for my needs
- [LinkBin](https://dhaydl.github.io/LinkBinWebsite/)

### Open Source Tumblr

Nothing, to my knowledge, has ever come close to the ease of posting different types of content (photos, videos, quotes, etc) as [Tumblr](https://tumblr.com) has. I have the bones of this with [Almanac](/projects/almanac/) but that's media-specific.


## Abandoned

### Apple Notes App

An alternative app for Apple Notes on the Mac. There's no APIs for Notes that allow viewing and editing. You can get access to the local database but that'll be fragile and break all the time.

### Notes

Location of the Notes database:

```bash
/Users/USER/Library/Group\ Containers/group.com.apple.notes/
```

Query for titles:

```sql
SELECT
    t1.ztitle1,
    t1.zfolder,
    t1.zmodificationdate1,
    t1.z_pk,
    t1.znotedata,
    t2.zdata,
    t2.z_pk
FROM
    ziccloudsyncingobject AS t1
    INNER JOIN zicnotedata AS t2 ON t1.znotedata = t2.z_pk
WHERE
    t1.ztitle1 IS NOT NULL
    AND t1.zmarkedfordeletion IS NOT 1
```

### Other

- [lxf2xml - Convert LXF files to Bricklink XML client-side](https://github.com/rknightuk/lxf2xml)
- [Viewage - analytics attempt](https://github.com/rknightuk/viewage)