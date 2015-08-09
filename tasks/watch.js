module.exports = function(gulp, config) {
  gulp.task('watch:sass', function() {
    gulp.watch(config.watch.sass, ['sass:compile']);
  });

  gulp.task('watch:js', function() {
    gulp.watch(config.watch.js, ['js:bundle']);
  });
};
