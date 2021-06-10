/*
 * @Description: 哈希表
 * @Date: 2021-06-08 21:58:57 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-10 17:04:12 +0800
 * @LastEditors: JackChou
 */
/**
 数组问题：
 1. 插入成本高
 2. 基于下标查找效率高，根据元素内容查找效率低
 3. 删除效率低

 哈希表的缺点
 1. 数据无序
 2. key不允许重复
// NOTE 哈希表如何解决冲突？
① 链地址法
② 开发地址法
// NOTE 霍纳法则

好的哈希函数的特点：
1. 快速计算hashCode
2. 能让元素分布均匀，否则查找元素效率会低
 */
export function hashFunction(str = '', size) {
  let hashCode = 0
  const strArray = [...str]
  // 霍纳法则
  strArray.forEach((_, i) => {
    hashCode = 37 * hashCode + str.charCodeAt(i)
  })
  return hashCode % size
}
