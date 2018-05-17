var gulp    = require('gulp'),
    del     = require('del'),
    sync    = require('browser-sync').create(),
    gulpIf  = require('gulp-if'),
    util    = require('gulp-util'),
    plugins = require('gulp-load-plugins')({
        scope: ['devDependencies']
    });


var IS_DEV = true;

var paths = {
    pathsrc           : 'app/**/*',
    srcHTML           : 'app/**/*.html',
    srcLess           : 'app/styles/style.less',
    srcJS             : 'app/scripts/main.js',
    srcIMG            : 'app/img/**/*',
    dist              : 'dist',
    distIndex         : 'dist/index.html',
    distCSS           : 'dist/css/',
    distJS            : 'dist/scripts',
    distIMG           : 'dist/img/'
};


gulp.task('html', function () {
    return gulp.src(paths.srcHTML)
        .pipe(plugins.htmlExtend())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('styles:app', function () {
    return gulp.src(paths.srcLess)
        .pipe(gulpIf(IS_DEV, plugins.sourcemaps.init()))
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer("last 2 versions"))
        // .pipe(plugins.cssnano())
        .pipe(plugins.rename('style.css'))
        .pipe(gulpIf(IS_DEV, plugins.sourcemaps.write()))
        .pipe(gulp.dest(paths.distCSS))
        .pipe(sync.stream());
});

gulp.task('scripts:app', function() {
    return gulp.src(paths.srcJS)
         .pipe(gulpIf(IS_DEV, plugins.sourcemaps.init()))
         // .pipe(plugins.uglify())
         .pipe(gulpIf(IS_DEV, plugins.sourcemaps.write()))
         .pipe(gulp.dest(paths.distJS));

});

gulp.task('image', function () {
    return gulp.src(paths.srcIMG)
        // .pipe(plugins.image())
        .pipe(gulp.dest(paths.distIMG));
});

gulp.task("styles", ["styles:app"]);
gulp.task("scripts", ["scripts:app"]);

gulp.task('clean', function(cb){
    setTimeout(function() {
        del.sync('dist');
        cb();
    }, 2000);
});

gulp.task('build', ['clean'], function() {
    gulp.start(['html', 'styles', 'scripts', 'image']);
});

gulp.task('watch', ['build'], function() {
    sync.init({
        server: 'dist'
    });

    gulp.watch('app/styles/*.less', ['styles:app']);
    gulp.watch('app/styles/*.less', ['styles:app']).on("change", sync.reload);

    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/*.html', ['html']).on("change", sync.reload);

    gulp.watch('app/scripts/main.js', ['scripts:app']);
    gulp.watch('app/scripts/main.js', ['scripts:app']).on("change", sync.reload);

    gulp.watch('dist/index.html').on('change', sync.reload);
});


gulp.task('default', ['watch']);