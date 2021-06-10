/*
 * @Description: 二叉搜索树测试
 * @Date: 2021-06-10 22:35:38 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-11 00:40:26 +0800
 * @LastEditors: JackChou
 */
import { BinarySearchTree } from '@ds/index.js'
describe('BinarySearchTree', () => {
  const binarySearchTree = new BinarySearchTree()
  it('insert', () => {
    expect(binarySearchTree.insert(11)).toBe(true)
    expect(binarySearchTree.insert(7)).toBe(true)
    expect(binarySearchTree.insert(15)).toBe(true)
    expect(binarySearchTree.insert(5)).toBe(true)
    expect(binarySearchTree.insert(3)).toBe(true)
    expect(binarySearchTree.insert(9)).toBe(true)
    expect(binarySearchTree.insert(8)).toBe(true)
    expect(binarySearchTree.insert(10)).toBe(true)
    expect(binarySearchTree.insert(13)).toBe(true)
    expect(binarySearchTree.insert(12)).toBe(true)
    expect(binarySearchTree.insert(14)).toBe(true)
    expect(binarySearchTree.insert(20)).toBe(true)
    expect(binarySearchTree.insert(18)).toBe(true)
    expect(binarySearchTree.insert(25)).toBe(true)
    expect(binarySearchTree.insert(6)).toBe(true)
  })
  it('preOrderTraverse', () => {
    let str = ''
    const callback = value => {
      str += value + ','
    }
    expect(binarySearchTree.preOrderTraverse(callback)).toBe()
    console.log(str)
  })
  it('inOrderTraverse', () => {
    let str = ''
    const callback = value => {
      str += value + ','
    }
    expect(binarySearchTree.inOrderTraverse(callback)).toBe()
    console.log(str)
  })
  it('postOrderTraverse', () => {
    let str = ''
    const callback = value => {
      str += value + ','
    }
    expect(binarySearchTree.postOrderTraverse(callback)).toBe()
    console.log(str)
  })
  it('min', () => {
    expect(binarySearchTree.min()).toBe(3)
    binarySearchTree.insert(0)
    expect(binarySearchTree.min()).toBe(0)
  })
  it('max', () => {
    expect(binarySearchTree.max()).toBe(25)
    binarySearchTree.insert(100)
    expect(binarySearchTree.max()).toBe(100)
  })
  it('find', () => {
    expect(binarySearchTree.search(4)).toBe(false)
    expect(binarySearchTree.search(40)).toBe(false)
    expect(binarySearchTree.search(10)).toBe(true)
  })
})
