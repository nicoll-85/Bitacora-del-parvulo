const { src, watch, series } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const count = require('gulp-file-count');
const multiDest = require('gulp-multi-dest');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const buildCssCore = function (done) {
    src(['./sass/theme-oc.scss', './sass/**/*.scss', './sass/*.scss'])
        .pipe(count({
            getFileCount: function (fileCount) {
                console.log(`SASS files to process ${fileCount}`);
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(multiDest(['./html/css'], {
            mode: 0755
        }))
        .pipe(browserSync.stream());
    done();
}

const buildHtml = function (done) {
    src(['./pug/**/*.pug', './pug/*.pug'])
        .pipe(count({
            getFileCount: function (fileCount) {
                console.log(`Pug files to process ${fileCount}`);
            }
        }))
        .pipe(pug({ pretty: true, verbose: true }))
        .pipe(multiDest(['./html'], {
            mode: 0755
        }))
        .pipe(browserSync.stream());
    done();
};
const serve = series(buildHtml, buildCssCore, function (done) {  
    watch(['./sass/**/*.scss'], buildCssCore);
    watch(['./pug/**/*.pug'], buildHtml);
    watch("./*.html").on('change', browserSync.reload);
    browserSync.init({
        serveStatic: ['.'],
    });
});
// Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
//         .pipe(gulp.dest("src/dist/js"))
//         .pipe(browserSync.stream());
// });
exports.serve = serve;
exports.default = series( buildCssCore, buildHtml);