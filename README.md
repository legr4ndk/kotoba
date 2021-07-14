# kotoba
类似于一言的句子推送API


使用Node.js与SQLite3数据库写成

## 使用方法
支持两种请求，均需使用GET方法

提供一个method字段用来鉴别

若GET传送method=js，则api会返回一段JavaScript脚本，自动将页面中标注为`#kotoba`的元素的内容更改为获取到的句子

若GET传送method=json，则api将往前端返回一段JSON字符串，可以在得到字符串后再自己利用其他方法添加内容到网页上，这种方法相对更加自由。

## 部署
你可以使用pm2或者forever

另外：**也许有个大佬能教我把这玩意整到容器里面 部署的方便些**（这个作者完全不会Go）
