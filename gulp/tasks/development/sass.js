var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');
var debug        = require('gulp-debug');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  // return gulp.src(config.sass.src)
  return sass(config.sass.src, sassConfig)

    // .on('error', function (err) {
    //   console.error('Error', err.message);
    //  })

    .pipe(plumber())

    // .pipe(debug())

    // .pipe(sass(sassConfig))
    // .pipe(sourcemaps.init())

    // .pipe(sourcemaps.write())

    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false })) // this is broken
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});
