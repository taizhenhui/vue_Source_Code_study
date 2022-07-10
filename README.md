- 默认下载好后 先  `npm install` 安装依赖

- 代码的目录结构
- benchmarks 做性能测试的
- dist 最终打包出的结果都放到了dist下
- examples 官方的例子
- flow 类型检测 (没有人用了  和  ts功能类似)
- packages 一些写好的包 (vue 源码中包含了weex)
- scripts 所有打包的脚本都放在这里
- src 源代码目录
  - compiler 专门用作模板编译
  - core vue2核心代码
  - platforms 
  - server 服务器端渲染相关
  - sfc 解析单文件组件
  - shared 模块之间的共享属性和方法
- test 测试目录
- types 支持ts



- 通过package.json 找到打包入口
- scripts/config.js (web-full-dev, web-runtime-cjs-dev, web-runtime-esm, ...)
- 打包的入口
- web/entry-runtime.js                 ---->  src/platforms/web/entry-runtime.js
- web/entry-runtime-with-compiler.js   ---->  src/platforms/web/entry-runtime-with-compiler.js