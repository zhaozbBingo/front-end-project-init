/**
 * Created by Administrator on 2017/5/5.
 */
// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    less = require('gulp-less'),
    clean = require('gulp-clean'),             //清空文件夹
    livereload = require('gulp-livereload');   //livereload

// HTML处理
gulp.task('html', function() {
    gulp.src('src/static/*.html')
        .pipe(livereload())
        .pipe(gulp.dest('dist/static'))
});

// LESS样式处理
gulp.task('less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(livereload())
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('dist/css'));
});

// CSS处理
gulp.task('css', function() {
    gulp.src('src/css/**/*.css')
        .pipe(livereload())
        .pipe(gulp.dest('dist/css'))
});

// 图片处理
gulp.task('images', function(){
    gulp.src('src/images/**/*')
        .pipe(livereload())
        .pipe(gulp.dest('dist/images'));
})

// js处理
gulp.task('scripts', function () {
    gulp.src('src/scripts/*.js')
        .pipe(livereload())
        .pipe(gulp.dest('dist/scripts'));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['dist/css', 'dist/scripts', 'dist/images'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','less', 'css','images','scripts');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    livereload.listen();
    // server.listen(port, function(err){
    //     if (err) {
    //         return console.log(err);
    //     }

        // 监听html
        gulp.watch('src/static/*.html', function(){
            gulp.run('html');
        })

        // 监听less
        gulp.watch('src/less/*.less', function(){
            gulp.run('less');
        });

        // 监听css
        gulp.watch('src/css/**/*.css', function(){
            gulp.run('css');
        });

        // 监听images
        gulp.watch('src/images/**/*', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch('src/scripts/*.js', function(){
            gulp.run('scripts');
        });

    // });
});