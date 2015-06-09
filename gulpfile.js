'use strict';

var gulp = require('gulp');

var moduleDir = './public/js/*.js';

var babel = require('gulp-babel');
gulp.task('babel', function () {
    return gulp.src(moduleDir)
        .pipe(babel({
            modules: 'umd'
        }))
        .pipe(gulp.dest('dist/babel'));
});

gulp.task('default', ['babel'])


gulp.task('watch', function() {
    gulp.watch(moduleDir, ['babel'])
});
