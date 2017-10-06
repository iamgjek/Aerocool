// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// bootstrap
import 'assets/scss/bootstrap/bootstrap.scss'
import 'slick-carousel/slick/slick.scss'
import 'assets/scss/style.scss'
import 'bootstrap/dist/js/bootstrap'
import 'slick-carousel/slick/slick'
//require the vu resource library
var VueResource = require('vue-resource');
//tell vue to use vue resource
Vue.use(VueResource);
Vue.http.options.root = '/root';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
