var assign = require('lodash').assign,
    gutil = require('gulp-util'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    shell = require('gulp-shell'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    watchify = require('watchify');

module.exports = function(gulp, config) {
  var customOpts = {
    entries: config.entry.js,
    debug: true
  };

  function buildJsBundle() {
    var opts = assign({}, customOpts);
    var b = browserify(opts).transform(babelify);
    bundleJS(b);
  }

  function bundleJS(b) {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(config.lib.js.bundleFileName))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.lib.js.dest));
  }

  gulp.task('js:bundle', buildJsBundle);

};