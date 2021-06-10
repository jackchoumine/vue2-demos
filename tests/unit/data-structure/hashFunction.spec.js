/*
 * @Description: stack 测试
 * @Date: 2021-06-04 22:41:48 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-10 17:08:22 +0800
 * @LastEditors: JackChou
 */
import { hashFunction } from '@ds/index.js'
describe('hashFunction', () => {
  it('hashFunction', () => {
    console.log(hashFunction('abc', 7))
    console.log(hashFunction('cba', 7))
    console.log(hashFunction('nba', 7))
    console.log(hashFunction('undefined', 7))
  })
})
