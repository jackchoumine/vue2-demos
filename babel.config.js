/*
 * @Description: babel 配置
 * @Date: 2021-06-01 10:07:44 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-01 15:06:31 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
