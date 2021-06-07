/*
 * @Description: 双向链表测试
 * @Date: 2021-06-07 19:23:49 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-07 23:38:40 +0800
 * @LastEditors: JackChou
 */
import { DoubleLinkList } from '@ds/index.js'
describe('LinkList', () => {
  const linkList = new DoubleLinkList()
  it('append', () => {
    const jack = { name: 'JackChou' }
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
    linkList.clear()
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
  it('removeAt', () => {
    linkList.clear()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append('A')
    expect(linkList.removeAt(0)).toBe(true)
    console.log(linkList + '')
    expect(linkList.removeAt(1)).toBe(true)
    linkList.append('B')
    linkList.append(2)
    linkList.append('A')
    console.log(linkList + '')
    expect(linkList.removeAt(3)).toBe(true)
    console.log(linkList + '')
  })
  it('remove', () => {
    console.log('remove----')
    linkList.clear()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append('A')
    console.log(linkList + '')
    expect(linkList.remove(1)).toBe(true)
    console.log(linkList + '')
    expect(linkList.remove(4)).toBe(false)
    console.log(linkList + '')
  })
  it('update', () => {
    console.log('update----')
    linkList.clear()
    linkList.append(0)
    linkList.append('JackChou')
    linkList.append(1)
    linkList.append(2)
    linkList.append('A')
    linkList.append(0)
    linkList.append('JackChou')
    linkList.append(1)
    linkList.append(2)
    linkList.append('A')
    console.log(linkList.length)
    expect(linkList.update()).toBe(false)
    expect(linkList.update(2, '二')).toBe(true)
    console.log(linkList + '')
    expect(linkList.update(4, '③')).toBe(true)
    expect(linkList.update(5, '③')).toBe(true)
    expect(linkList.update(6, 'love')).toBe(true)
    console.log(linkList + '')
    expect(linkList.update(8, 'love')).toBe(true)
    console.log(linkList + '')
    expect(linkList.update(9, 'u')).toBe(true)
    console.log(linkList + '')
  })
  it('get', () => {
    linkList.clear()
    expect(linkList.get('B')).toBe(null)
    expect(linkList.get('0')).toBe(null)
    expect(linkList.get(6)).toBe(null)
  })
  it('get', () => {
    linkList.clear()
    console.log(linkList + '')
    linkList.append('0')
    linkList.append('1')
    linkList.append('2')
    linkList.append('A')
    linkList.append('B')
    linkList.append('A')
    expect(linkList.get(0)).toBe('0')
    expect(linkList.get(3)).toBe('A')
    expect(linkList.get(5)).toBe('A')
  })
  it('indexOf', () => {
    linkList.clear()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append('A')
    expect(linkList.indexOf(5)).toBe(-1)
    expect(linkList.indexOf('A')).toBe(3)
  })
  it('findAllIndex', () => {
    linkList.clear()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append('1')
    linkList.append('A')
    linkList.append('A')
    expect(linkList.findAllIndex(5)).toEqual({ 5: false })
    expect(linkList.findAllIndex('A', '1')).toEqual({ 1: [3], A: [4, 5] })
  })
})
