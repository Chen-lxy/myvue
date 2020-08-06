import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../content'
import Main from '../main'
//显示的安装路由
Vue.use(VueRouter);

// 配置导出路由
export  default new VueRouter({
  routes:[{
  //  路由的路径
    path:"/content",
    name:'content',
    component:Content
  },
    {
      path:"/main",
      name:'main',
      component:Main
    }
  ]
})
