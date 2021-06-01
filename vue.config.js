/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
/** @type {Options} */
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/'))
      .set('@com', resolve('src/components'))
      .set('views', resolve('src/views'))
    config.resolve.extensions
      .add('.js')
      .add('.jsx')
      .add('.vue')
      .add('.json')
  },
}

/** @type {Options} */
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       extensions: ['.js', '.vue', '.json'],
//       alias: {
//         '@': resolve('src/'),
//         '@com': resolve('src/components'),
//         views: resolve('src/views'),
//       },
//     },
//   },
// }
