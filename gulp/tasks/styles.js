const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp
    .src('./app/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
});
