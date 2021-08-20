// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import ElementUI from 'element-ui';
// import axios from 'axios'

import App from './App'
import router from './router'

import 'babel-polyfill'
import util from './common/util'
import Vuex from 'vuex'
import store from './store'
// import CKEditor from '@ckeditor/ckeditor5-vue';
window.moment = require('moment')


// import 'element-ui/lib/theme-chalk/index.css';
// import '../static/css/theme-green/index.css';

//引入多语言支持
import i18n from './common/i18n'


Vue.prototype.$ajax = axios
Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(util);
Vue.use(Vuex);
// Vue.use(CKEditor);

// import permission from './directive' // simplify
process.env.MOCK && require('@/apimock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,//挂载i18n
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Add menu dynamically
let sysMenuVoList = [
  {
    id: 2,
    menuCode: null,
    menuName: "基础模块",
    menuIcon: "el-icon-tickets",
    menuUrl: null,
    parentId: "0",
    orderBy: "2",
    isShow: 1,
    resoure_url: null,
    resoure_type: "module",
    permission: "2",
    sysMenuVoChild: [
      {
        id: 7,
        menuCode: null,
        menuName: "标签选项卡",
        menuIcon: "0",
        menuUrl: null,
        parentId: "2",
        orderBy: "2",
        isShow: 1,
        resoure_url: "FlowMonitor/index",
        resoure_type: "url",
        permission: "tabpage",
        sysMenuVoChild: [],
      },
      {
        id: 34,
        menuCode: null,
        menuName: "Travel Info Board",
        menuIcon: "",
        menuUrl: null,
        parentId: "2",
        orderBy: "",
        isShow: 1,
        resoure_url: "",
        resoure_type: "url",
        permission: "travelinfoboard",
        sysMenuVoChild: [],
      },
    ],
  },
]

store.dispatch("add_Menus", sysMenuVoList);
store.dispatch("add_Routes", sysMenuVoList);
router.replace({ path: "/travelinfoboard" });
