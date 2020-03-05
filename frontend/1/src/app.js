import Vue from 'vue';
import router from './routes';
import App from './App.vue';
import './styles/style.scss';

const render = () => {
  return new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
};

render();
