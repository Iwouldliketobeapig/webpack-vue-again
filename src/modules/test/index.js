import Vue from '$js/vue';
import App from './App';
import Vuex from 'vuex';
import Post from '$vuex/post';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    post: Post
  }
})

new Vue({
  store,
  template: '<App></App>',
  components: {
    App
  }
}).$mount('#app');
