/*
 * @Description: stack 测试
 * @Date: 2021-06-04 22:41:48 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-04 22:51:30 +0800
 * @LastEditors: JackChou
 */
import { Stack } from '@ds/index.js'
describe('Stack', () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  it('peek', () => {
    expect(stack.peek()).toBe(3)
  })
  it('pop', () => {
    expect(stack.pop()).toBe(3)
  })
})
