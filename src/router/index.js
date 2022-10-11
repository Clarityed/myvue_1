import Vue from "vue";
// 导入路由插件
import VueRouter from "vue-router";
// 导入上面定义的组件，内容页组件和首页组件
import Content from "../components/Content";
import Main from "../components/Main";
// 安装路由
Vue.use(VueRouter);
// 配置路由
export default new VueRouter({
  routes: [
    {
      // 路由路径
      path: '/content',
      // 路由名称，可以不写
      name: 'content',
      // 跳转到的组件
      component: Content
    },
    {
      // 路由路径
      path: '/main',
      // 路由名称，可以不写
      name: 'main',
      // 跳转到的组件
      component: Main
    },
  ]
});
