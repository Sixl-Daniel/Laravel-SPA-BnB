require('./bootstrap');

import VueRouter from 'vue-router';
import router from './routes';

import Index from './Index';

window.Vue = require('vue');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        Index
    }
});
