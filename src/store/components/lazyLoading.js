/**
 * 
 * 懒加载动态路由 
 */
function lazy(code) {

  //return  resolve => require(["@/components/" + name + ".vue"], resolve)
  return getComponetByPath('/' + code);


}
function getComponetByPath(path) {
  for (var i = 0; i < dynamicRouter.length; i++) {
    var route = dynamicRouter[i];
    if (route.path == path) {
      return route.component;
    }
  }
}
/**
 * 路由定义
 * path跟配置里的资源标示对应,同时跟url地址对应
 */
const dynamicRouter = [
  // {
  //   name: 'index',
  //   path: '/index',
  //   component: resolve => require(['@/components/index.vue'], resolve),
  //   meta: {
  //     title: '系统首页-2'
  //   }
  // },
  {
    name: 'travelinfo',
    path: '/travelinfo',
    component: resolve => require(['@/components/tabpage/tabpage.vue'], resolve),
    meta: {
      title: '标签选项卡'
    }
  },
  {
    name: 'travelinfoboard',
    path: '/travelinfoboard',
    component: resolve => require(['@/components/tablepage/travelinfoboard.vue'], resolve),
    meta: {
      title: '增删改查二'
    }
  },
]
export { lazy }

