/*
 * @Description: 集合测试
 * @Date: 2021-06-08 00:32:35 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-08 00:46:57 +0800
 * @LastEditors: JackChou
 */
import { MySet } from '@ds/index.js'
describe('Stack', () => {
  const mySet = new MySet()
  it('add', () => {
    expect(mySet.add('1')).toBe(true)
  })
  it('add', () => {
    expect(mySet.has('1')).toBe(true)
  })
  it('remove', () => {
    expect(mySet.remove('1')).toBe(true)
    expect(mySet.remove('100')).toBe(false)
  })
  it('clear', () => {
    mySet.clear()
    expect(mySet.has('1')).toBe(false)
  })
  it('size', () => {
    mySet.clear()
    mySet.add('0')
    mySet.add('1')
    expect(mySet.size()).toBe(2)
  })
  it('values', () => {
    mySet.clear()
    mySet.add('0')
    mySet.add('1')
    expect(mySet.values()).toEqual(['0', '1'])
  })
})
