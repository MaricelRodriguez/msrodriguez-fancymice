const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const reload      = browserSync.reload;

const src = {
  scss: 'scss/*.scss',
  css:  'css',
  html: '*.html'
};

function style(){
  return(
    gulp.src(src.scss)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest(src.css))
      .pipe(reload({stream: true}))
  );
}

function watch(){
  browserSync.init({
    server: "./"
  });

  gulp.watch(src.scss, style);
  gulp.watch(src.html).on('change', reload);
}

exports.default = watch;
