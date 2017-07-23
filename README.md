# shoppingCart
## Vue 2.0 实现购物车功能

### 项目开发注意一下几点：
- Vue 1.0和2.0的版本差异。
- Chrome浏览器断点调试：控制台——Source——Ctrl+P——输入需要查看的文件——进行断点调试。
- v-on绑定事件，实现金额动态计算。
- filter 过滤器的使用
  1.局部过滤器：当前vue的实例才能使用。
  2.全局过滤器：所有页面都能使用。
### 注意：
 - 在真正的页面开发中，像商品金额带有小数位的数据，不应该由前端进行格式化，而是由后端直接返回。因为前端JS有精度丢失。
 - 本项目开发时使用sublime编辑器，需要安装sublimeServer。具体参考：http://www.cnblogs.com/LinSL/p/7213818.html
