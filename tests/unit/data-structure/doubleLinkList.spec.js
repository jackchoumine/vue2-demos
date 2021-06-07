/*
 * @Description: 双向链表测试
 * @Date: 2021-06-07 19:23:49 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-07 21:42:38 +0800
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
  it('get', () => {})
  it('indexOf', () => {})
})
