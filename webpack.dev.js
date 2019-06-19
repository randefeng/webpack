 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   //   performance: {
//     //因为限制了文件大小为250kb，如果超过就会提示
// //    You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
//     // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
//     hints: "warning",
//     // 开发环境设置较大防止警告
//     // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
//     maxEntrypointSize: 5000000, 
//     // 最大单个资源体积，默认250000 (bytes)
//     maxAssetSize: 3000000
// }
 });
