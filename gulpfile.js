'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const csscomb = require('gulp-csscomb');
const csso = require('gulp-csso');

gulp.task('scss', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('resources/css'));
});

gulp.task('csscomb', function () {
    return gulp.src('resources/sass/**/*.scss')
        .pipe(csscomb('yandex.json').on('error', scss.logError))
        .pipe(gulp.dest('resources/sass'));
});

gulp.task('watch', function () {
    gulp.watch('resources/sass/**/*.scss', gulp.series('scss'));
});
