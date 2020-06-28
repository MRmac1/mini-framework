Express.js 最小实现


存在实体 

* 入口 - Express.js 

负责导出 Application 供启动，导出 Router 类供路由编写

* 应用实例 - Application.js

  * listen 方法 - 系统启动监听
  * 全局配置设置
  * use 方法 - 挂载中间件到 router
  * handle 方法 - 处理应用请求

* 路由处理 - Router.js
  
  * use 方法，app.use() 方法调用，将 path 挂载到 router 对象的 stack 上去。
  * handle 方法，app.handle() 方法调用，将 path 对应下的相同 method 的 stack 递归调用。
