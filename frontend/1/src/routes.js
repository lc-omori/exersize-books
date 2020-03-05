import Vue from 'vue';
import Router from 'vue-router';
import Menu from './components/pages/Menu';
import Todo from './components/pages/Todo';

Vue.use(Router);

const routes = [
  { path: '/', component: Menu },
  { path: '/todo', component: Todo },
];

const router = new Router({
  routes,
});

export default router;
