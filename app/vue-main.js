'use strict';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.devtools = true;

Vue.component('header-main', require('../views/component_vue/header.vue').default);
Vue.component('footer-main', require('../views/component_vue/footer.vue').default);
Vue.component('main-page', require('../views/component_vue/main-page.vue').default);

const app = new Vue({
    el: '#vue',
});