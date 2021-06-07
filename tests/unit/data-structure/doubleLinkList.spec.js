/*
 * @Description: 双向链表测试
 * @Date: 2021-06-07 19:23:49 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-07 22:38:07 +0800
 * @LastEditors: JackChou
 */
import { DoubleLinkList } from '@ds/index.js'
describe('LinkList', () => {
  const linkList = new DoubleLinkList()
  const jack = { name: 'JackChou' }
  it('append', () => {
    expect(linkList.append(jack)).toBe(true)
    expect(linkList + '').toBe(JSON.stringify(jack))
    expect(linkList.append('test')).toBe(true)
    // console.log(linkList + '')
  })
  it('insert 0', () => {
    linkList.clear()
    expect(linkList.insert('1', 0)).toBe(true)
    expect(linkList.insert('2', 0)).toBe(true)
  })
  it('insert length', () => {
    expect(linkList.insert('4')).toBe(true)
  })
  it('insert position', () => {
    linkList.clear()
    expect(linkList.insert('0')).toBe(true)
    expect(linkList.insert('1')).toBe(true)
    expect(linkList.insert('2')).toBe(true)
    expect(linkList.insert('3')).toBe(true)
    expect(linkList.insert('A', 3)).toBe(true)
    expect(linkList.insert('A', 5)).toBe(true)
    expect(linkList.insert('B', 7)).toBe(false)
  })
  it('insert', () => {})
  it('removeAt', () => {})
  it('remove', () => {})
  it('update', () => {})
  it('size', () => {})
  it('get', () => {
    expect(linkList.get('B')).toBe(null)
    expect(linkList.get('0')).toBe(null)
    expect(linkList.get(6)).toBe(null)
  })
  it('get', () => {
    console.log(linkList + '')
    expect(linkList.get(0)).toBe('0')
    expect(linkList.get(3)).toBe('A')
    expect(linkList.get(5)).toBe('A')
  })
  it('indexOf', () => {
    expect(linkList.indexOf(5)).toBe(-1)
    expect(linkList.indexOf('A')).toBe(3)
  })
  it('findAllIndex', () => {
    expect(linkList.findAllIndex(5)).toEqual({ 5: false })
    expect(linkList.findAllIndex('A', '1')).toEqual({ 1: [1], A: [3, 5] })
  })
})
