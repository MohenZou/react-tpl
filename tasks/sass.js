'use strict'
var sass = require('gulp-sass'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp, config) {
  gulp.task('sass:compile', function() {
    var stream = gulp.src(config.entry.sass)
      .pipe(sourcemaps.init())
      .pipe(sass()).on('error', sass.logError)
      .pipe(rename(config.lib.css.bundleFileName));
    return stream.pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.lib.css.dest));
  });
};
