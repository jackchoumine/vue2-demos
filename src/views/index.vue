<!--
 * @Description: 入口页面
 * @Hash: /
 * @Date: 2021-06-01 14:17:03 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-02 00:21:54 +0800
 * @LastEditors: JackChou
-->
<template>
  <el-container>
    <el-aside width="150px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style>
.el-aside {
  background-color: red !important;
  /* color: #333; */
  /* text-align: center; */
  /* line-height: 200px; */
}
</style>
