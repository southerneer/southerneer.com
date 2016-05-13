var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');
var debug        = require('gulp-debug');

gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    // .pipe(debug())
    // .pipe(plumber())

    // .pipe(sourcemaps.init())
    // .pipe(sass.sync({
    //   outputStyle: 'expanded',
    //   precision: 10,
    //   includePaths: ['.']
    // }).on('error', sass.logError))
    // // .pipe(autoprefixer({browsers: ['last 1 version']}))
    // .pipe(sourcemaps.write())

    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())


    .pipe(gulp.dest(config.sass.dest))
    // .pipe(reload({stream: true}));
});

// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('sass', function () {
//  return gulp.src('./sass/**/*.scss')
//   .pipe(sourcemaps.init())
//   .pipe(sass().on('error', sass.logError))
//   .pipe(sourcemaps.write())
//   .pipe(gulp.dest('./css'));
// });