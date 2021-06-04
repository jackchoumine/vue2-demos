/*
 * @Description: 优先级队列
 * @Date: 2020-05-17 21:23:31
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-17 23:51:50
 * @LastEditors: JackChouMine
 */
/**
 * 优先级队列：在插入元素时会考虑优先级，根据优先级确定插入位置
 */

/**
 *基于数组实现优先级队列
 */
export const PriorityQueue = function() {
  this.items = []
  function QueueElement(value, priority) {
    this.value = value
    this.priority = priority
  }
  /**
   * 队列是否为空
   */
  PriorityQueue.prototype.isEmpty = function() {
    return !this.items.length
  }
  /**
   * 获取队列元素个数
   */
  PriorityQueue.prototype.size = function() {
    return this.items.length
  }
  /**
   * 进入队列,返回新的元素个数
   */
  PriorityQueue.prototype.enqueue = function({ value, priority } = {}) {
    const element = new QueueElement(value, priority)
    if (this.isEmpty()) {
      // 队列为空，直接插入
      this.items.push(element)
    } else {
      let added = false
      // 比较优先级，确定位置再插入
      for (let i = 0; i < Math.ceil(this.items.length / 2); i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(element)
      }
    }
  }
  /**
   * 删除元素，返回被删除元素
   */
  PriorityQueue.prototype.dequeue = function() {
    return this.items.length ? this.items.shift() : null
  }
  /**
   * 查看前端元素
   */
  PriorityQueue.prototype.front = function() {
    return this.items.length ? this.items[0] : null
  }
  PriorityQueue.prototype.toString = function(separator = ',') {
    let str = ''
    for (const item of this.items) {
      str += separator + JSON.stringify(item)
    }
    return str.substring(1)
  }
}
