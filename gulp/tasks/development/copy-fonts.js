var gulp   = require('gulp'),
    config = require('../../config').copyfonts.development,
    mbf = require('main-bower-files'),
    debug = require('gulp-debug');

/**
 * Copy fonts (including stuff from bower) to folder
 */
//gulp.task('copy:fonts', ['fontcustom'], function() {
  gulp.task('copy:fonts', function() {
  return gulp.src(mbf({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    })
    .concat(config.src)
  )
  // .pipe(debug())
  .pipe(gulp.dest(config.dest))
  .pipe(debug());
});