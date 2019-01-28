# wp-rc-cal
基于React webpack的算法Demo项目
作者：张贺
项目搭建链接：https://www.cnblogs.com/raion/p/8053799.html

知识点：
npm install -save 与 npm install -save-dev区别
https://www.cnblogs.com/limitcode/p/7906447.html

npm install moduleName # 安装模块到项目目录下
npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
npm install -save moduleName # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install -save-dev moduleName # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。

另一种简单思路构建React Project
https://www.cnblogs.com/wshtml5/p/sfmz.html
