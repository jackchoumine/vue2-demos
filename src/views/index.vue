<!--
 * @Description: 入口页面
 * @Hash: /
 * @Date: 2021-06-01 14:17:03 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-02 01:55:53 +0800
 * @LastEditors: JackChou
-->
<template>
  <div class="index-page">
    <div class="left">
      <el-aside width="150px" style="height:100%;">
        <Aside />
      </el-aside>
    </div>
    <div class="right">
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="less">
.index-page {
  height: 100%;
  display: flex;
  .right {
    min-width: 100%;
    .el-header {
      background-color: #ecedf1;
    }
  }
}
</style>
