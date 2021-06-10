/*
 * @Description: 二叉搜索树
 * @Date: 2021-06-10 22:28:36 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-11 00:33:16 +0800
 * @LastEditors: JackChou
 */

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return true
    } else {
      return this.insertNode(this.root, node)
    }
  }

  insertNode(node, newNode) {
    if (node.data <= newNode.data) {
      // 在右子树插入
      if (!node.right) {
        node.right = newNode
        return true
      } else {
        return this.insertNode(node.right, newNode)
      }
    } else {
      // 在左子树插入
      if (!node.left) {
        node.left = newNode
        return true
      } else {
        return this.insertNode(node.left, newNode)
      }
    }
  }

  remove(value) {}

  clear() {
    this.root = null
    return true
  }

  update(value) {}
  search(value) {}
  /**
   *中序遍历
   */
  inOrderTraverse(callback) {
    this.midOrderTraverseNode(this.root, callback)
  }

  midOrderTraverseNode(node, callback) {
    if (!node) return null
    else {
      // 左子树
      this.midOrderTraverseNode(node.left, callback)
      // 处理节点
      callback(node.data)
      // 在处理右子树
      this.midOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 先序遍历 根---> 左子树 ---> 右子树
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (!node) return null
    else {
      // 先处理节点
      callback(node.data)
      // TODO 重点理解
      // 先处理左子树
      this.preOrderTraverseNode(node.left, callback)
      // 在处理右子树
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后序遍历
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (!node) return null
    else {
      // 遍历左子树
      this.postOrderTraverseNode(node.left, callback)
      // 遍历右子树
      this.postOrderTraverseNode(node.right, callback)
      // 处理节点
      callback(node.data)
    }
  }

  min() {
    let node = this.root
    while (node.left) {
      node = node.left
    }
    return node?.data ?? null
  }

  max() {
    let node = this.root
    while (node.right) {
      node = node.right
    }
    return node?.data ?? null
  }
}
