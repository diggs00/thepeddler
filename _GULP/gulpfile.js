var gulp = require('gulp');
var express = require('express');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var notify = require('gulp-notify');
var server;
var html;


gulp.task('server' , function() {
    server = new express();
    server.use(express.static('../'));
    server.listen(6000);
    browserSync({proxy: 'localhost:6000'});
})

function reload() {
    if(server) {
        return browserSync.reload({stream: true});
    }
    return gutil.noop();
}


// Compiles sass files to css
gulp.task('sass', function(){
    gulp.src('../scss/my-account.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(cleanCss())
    .pipe(gulp.dest('../dist/css'))
    .pipe(reload())
    .pipe(notify({ message: 'SASS task complete' }));
});


// RELOAD HTML TASK
gulp.task('html' , function() {
    gulp.src('../*.html')
    .pipe(reload());
})


// Watches for any sass changes and HTML changes
gulp.task('watch', function (){
  	gulp.watch(['../scss/**/*.scss', '../vendor/bootstrap/scss/**/*.scss'], ['sass'])
  	gulp.watch('../**/*.html', ['html']);
});


gulp.task('default', ['server', 'watch', 'sass', 'html']); // Default will run the 'entry' watch task



