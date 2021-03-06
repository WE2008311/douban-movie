import Vue from 'vue';
import Router from 'vue-router';
import home from './routes/home';
import movieDetail from './routes/movieDetail';
import more from './routes/more';
import tag from './routes/tag';
import error from './routes/error';
import search from './routes/search';
import store from './../store';
import * as types from './../store/mutation-types';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    home,
    movieDetail,
    more,
    tag,
    search,
    error, // 404页面一定要在最后面
  ],
});

router.beforeEach((to, from, next) => {
  // 解决404返回不回去的bug
  store.commit(types.NET_STATUS, '');
  next();
});

export default router;
