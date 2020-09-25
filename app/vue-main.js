'use strict';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import YmapPlugin from 'vue-yandex-maps'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const settings = {
    apiKey: '3f4d0d91-335f-471f-9ce8-417da9fa065f',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
}

Vue.use(YmapPlugin, settings)

Vue.config.devtools = true;

Vue.component('header-main', require('../views/component_vue/header-main.vue').default);
Vue.component('main-page', require('../views/component_vue/main-page.vue').default);
Vue.component('special-route', require('../views/component_vue/special-route.vue').default);
Vue.component('showplaces', require('../views/component_vue/showplaces.vue').default);
Vue.component('showplace-details', require('../views/component_vue/showplace-details.vue').default);
Vue.component('routes', require('../views/component_vue/routes.vue').default);
Vue.component('route-details', require('../views/component_vue/route-details.vue').default);

const app = new Vue({
    el: '#vue',
});