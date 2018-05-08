const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

const config = {
    rootSrc: './',
    imgSrc: './src/images/',
    imgDist: './dist/images/',
    styleSrc: './src/scss/',
    styleDist: './src/css/',
};

gulp.task('sass', () => {
    gulp.src(config.styleSrc + 'style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.styleDist))
});


gulp.task('watch', () => {
    gulp.watch(config.styleSrc + '**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);
