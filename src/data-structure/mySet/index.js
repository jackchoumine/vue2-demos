/*
 * @Description: 集合
 * @Date: 2021-06-08 00:30:27 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-08 00:44:51 +0800
 * @LastEditors: JackChou
 */
export class MySet {
  constructor() {
    this.obj = {}
  }

  add(value) {
    if (this.has(value)) return false
    else {
      this.obj[value] = value
      return true
    }
  }

  remove(value) {
    if (this.has(value)) {
      delete this.obj[value]
      return true
    } else {
      return false
    }
  }

  clear() {
    this.obj = {}
  }

  has(value) {
    // eslint-disable-next-line no-prototype-builtins
    return this.obj.hasOwnProperty(value)
  }

  size() {
    return Object.keys(this.obj).length
  }

  values() {
    return Object.values(this.obj)
  }
}
