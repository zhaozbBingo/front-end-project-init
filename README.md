# front-end-project-init
> ## 运行环境：
 >> win10系统，nodejs，IntelliJ IDEA 2017.1.2
> ## 步骤
>> 1.更新项目至本地，安装项目中gulp相关依赖，这里把涉及到的几个依赖放到package.json中，所以只需要执行**npm install**即可一步安装完成
>> 2.执行**gulp**命令运行项目，浏览器地址栏输入访问地址：http://localhost:3000/src/static/person.html访问

> ## 主要用到的gulp插件有
>> ### gulp-load-plugins
>> 自动require在package.json中声明的依赖
>> ### browser-sync
>> 修改项目文件自动刷新浏览器，支持各大主流浏览器，之前采用gulp-livereload只能在chrome上使用并且还要在chrome上添加LiveReload插件支持，而采用**browser-sync**支持主流浏览器，且不需要在浏览器端装插件
>> ### gulp-clean
>> 由于src中的文件如果删除后再进行编译，这时候dist中的文件并没有跟着删掉，因此采用**gulp-clean**能先清空dist中的文件，确保编译前后文件一致
>> ### gulp-sourcemaps
>> css文件压缩后给调试带来不便，通过**gulp-sourcemaps**能够在编译后的文件中生成一个.map文件帮我们标记编译前的文件位置，在浏览器加载样式的时候显示编译前的文件，有助于我们调试和修改
>> ### gulp-less
>> Less编译支持
>> ### gulp-clean-css
>> 压缩css，官方推荐
>> ### gulp-uglify
>> 压缩js
>> ### gulp-concat
>> 合并文件
>> ### gulp-rename
>> 重命名
>> ### gulp-autoprefixer
>> 自动处理浏览器兼容前缀，例如：
>><code>a {
  display: flex;
}</code>
>>编译完后生产
>><code>a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}</code>
