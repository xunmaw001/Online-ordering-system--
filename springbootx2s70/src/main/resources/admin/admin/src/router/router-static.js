import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import quxiaodingdan from '@/views/modules/quxiaodingdan/list'
    import caipinpingjia from '@/views/modules/caipinpingjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import discusscaipinxinxi from '@/views/modules/discusscaipinxinxi/list'
    import caipinxinxi from '@/views/modules/caipinxinxi/list'
    import config from '@/views/modules/config/list'
    import caipinfenlei from '@/views/modules/caipinfenlei/list'
    import dingdanpeisong from '@/views/modules/dingdanpeisong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '菜品资讯',
        component: news
      }
      ,{
	path: '/quxiaodingdan',
        name: '取消订单',
        component: quxiaodingdan
      }
      ,{
	path: '/caipinpingjia',
        name: '菜品评价',
        component: caipinpingjia
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discusscaipinxinxi',
        name: '菜品信息评论',
        component: discusscaipinxinxi
      }
      ,{
	path: '/caipinxinxi',
        name: '菜品信息',
        component: caipinxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/caipinfenlei',
        name: '菜品分类',
        component: caipinfenlei
      }
      ,{
	path: '/dingdanpeisong',
        name: '订单配送',
        component: dingdanpeisong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
