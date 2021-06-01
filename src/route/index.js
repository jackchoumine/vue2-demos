/*
 * @Description: 路由配置
 * @Date: 2021-06-01 14:24:30 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-01 14:53:12 +0800
 * @LastEditors: JackChou
 */
import Router from 'vue-router'
import homeRoutes from 'views/home/route'

const childrenRoutes = [...homeRoutes]

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('views'),
      children: childrenRoutes,
    },
  ],
})
export default router
