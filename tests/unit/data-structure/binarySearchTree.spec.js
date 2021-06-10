/*
 * @Description: 二叉搜索树测试
 * @Date: 2021-06-10 22:35:38 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-10 23:44:08 +0800
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
})
