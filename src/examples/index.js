/*
 * @Description: 导出学习例子
 * @Date: 2021-06-02 12:55:29 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-03 15:42:50 +0800
 * @LastEditors: JackChou
 */
import dynamicComponent from './dynamic-component'
import confirm from './confirm'
const components = [dynamicComponent]

const myComponents = {
  install(Vue) {
    Vue.prototype.$myConfirm = confirm
    try {
      components.forEach(component => {
        if (!component.name) {
          // 跳出 forEach 的技巧
          throw new Error('组件必须提供名字，并且使用大驼峰式命名')
        } else {
          Vue.component(component.name, component)
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
}

export default myComponents
