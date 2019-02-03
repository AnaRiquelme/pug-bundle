var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// Server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {
    return gulp.src('./templates/*.pug')
        .pipe(pug()) // pipe to pug plugin
        .pipe(gulp.dest('./build/')) // tell gulp our output folder
        .pipe(browserSync.stream()); // sync with browser
});

// SCSS
gulp.task('sass', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass()) // pipe to sass plugin
        .pipe(gulp.dest('./build/css')) // tell gulp our css output folder
        .pipe(browserSync.stream());
});

// add watch to know all file changes
gulp.task('watch', function() {
    gulp.watch('./templates/*.pug', ['pug']);
    gulp.watch('./assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['pug', 'sass', 'browser-sync', 'watch']);