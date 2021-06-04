/*
 * @Description: 队列测试
 * @Date: 2021-06-05 02:56:19 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-05 03:04:44 +0800
 * @LastEditors: JackChou
 */
import { Queue } from '@ds/index.js'
describe('Queue', () => {
  const queue = new Queue()
  queue.enqueue('JackChou')
  queue.enqueue('1')
  queue.enqueue('2')
  queue.enqueue('3')
  queue.enqueue('4')
  it('dequeue', () => {
    expect(queue.dequeue()).toBe('JackChou')
  })
  it('front', () => {
    expect(queue.front()).toBe('1')
  })
  it('isEmpty', () => {
    expect(queue.isEmpty()).toBe(false)
  })
  it('toString', () => {
    expect(queue + '').toBe('"1","2","3","4"')
  })
})
