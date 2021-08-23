---
title: Gulp
---

## Ignore Specific Files

```js
gulp.src(
    [
        './css/*.css', 
        '!./not-this-one.css'
    ]
)
```

## Example with Default Tasks and Watcher

```js
const gulp = require('gulp'),
    { watch, parallel } = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify')

const CSS_FILES = [
    './src/_eleventy/assets/css/*.css', 
    '!./src/_eleventy/assets/css/dist.min.css'
]
const JS_FILES = [
    './src/_eleventy/assets/js/*.js', 
    '!./src/_eleventy/assets/js/dist.min.js'
]

function styles(cb) {
    return gulp.src(CSS_FILES)
        .pipe(concat('dist.min.css'))
        .pipe(minifyCSS())
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('./src/_eleventy/assets/css'))
}

function scripts(cb)
{
    return gulp.src(JS_FILES)
        .pipe(concat('dist.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/_eleventy/assets/js'));
}

const watcher = () => {
  watch(CSS_FILES, { ignoreInitial: true }, styles)
  watch(JS_FILES, { ignoreInitial: true }, scripts)
}

exports.default = parallel(styles, scripts)
exports.watch = watcher;
```

## Links

- [Concatenate & Minify Javascript with Gulp, Improve Site Performance](https://codehangar.io/concatenate-and-minify-javascript-with-gulp/)