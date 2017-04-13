'use strict';

let gulp = require('gulp');
let uglify = require('gulp-uglify');

gulp.task('uglify-js', function (done) {
    return gulp.src('dist/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        ;
});

gulp.task('default', ['uglify-js']);