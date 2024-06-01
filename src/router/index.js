import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/drag',
      name: 'drag',
      component: () => import('../views/moveable/Index.vue')
    },
    {
      path: '/dataSave',
      name: 'dataSave',
      component: () => import('../views/dataSave/index.vue')
    },
    {
      path: '/treeselect',
      name: 'treeselect',
      component: () => import('../views/treeselect/index.vue')
    }
  ]
});
