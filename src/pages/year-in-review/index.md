---
title: Year in Review
---

Since around 2016 I've kept a log of all everything I've watched and read, first with [Plot](http://plotapp.io) (just for movies) and then with my own system, [Almanac](/projects/almanac) (all media types).

Below are the stats and links for each year.

I have some data for pre-2016 but it's incomplete so I've excluded it from the roundup.

## [2020](https://almanac.rknight.me/2020)

- 203 movies
- 39 TV shows
- 17 games
- 6 books

## [2019](https://almanac.rknight.me/2019)

- 107 movies
- 25 TV shows
- 27 books
- 7 games

## [2018](https://almanac.rknight.me/2018)

- 105 movies
- 36 TV shows
- 33 books
- 17 games

## [2017](https://almanac.rknight.me/2017)

- 63 movies
- 33 TV shows
- 13 games

## [2016](https://almanac.rknight.me/2016)

- 106 movies
- 3 TV shows
- 3 games

## Accessing Stats

I have yet to add a user-facing feature to do this in [Almanac](/projects/almanac) so for now I'm running the queries directly in the database.

```sql
select count(type), type from posts
where created_at >= '2021-01-01 00:00:00'
and created_at <= '2021-12-31 23:59:59'
and deleted_at is null
group by type
```