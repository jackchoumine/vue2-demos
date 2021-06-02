<!--
 * @Description: 动态创建组件
 * @Date: 2021-06-02 12:56:00 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-02 17:25:47 +0800
 * @LastEditors: JackChou
-->
<template>
  <div>
    <h2>动态创建组件</h2>
    <el-button type="primary" @click="createButton">点击创建</el-button>
    <div ref="container"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import MyButton from './MyButton'
console.log(MyButton)
export default {
  name: 'DynamicComponent',
  methods: {
    createButton() {
      const SubVue = Vue.extend(MyButton)
      const MyButtonInstance = new SubVue({
        propsData: { type: 'success' },
      })
      // MyButtonInstance.$slots.default = [<span>传递vnode</span>, '哈哈哈']
      MyButtonInstance.$scopedSlots = { name: ({ age }) => <span>{age}</span> }
      // MyButtonInstance.$children = [<span>传递vnode</span>, '哈哈哈']
      const res = MyButtonInstance.$mount() // this.$refs.container
      console.log(res)
      this.$refs.container.appendChild(MyButtonInstance.$el)
    },
  },
}
</script>

<style></style>
