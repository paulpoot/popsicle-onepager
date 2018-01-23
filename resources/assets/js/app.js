/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var VueScrollTo = require('vue-scrollto');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('masthead', require('./components/masthead.vue'));
Vue.component('about', require('./components/about.vue'));
Vue.component('features', require('./components/features.vue'));
Vue.component('assignment', require('./components/assignment.vue'));
Vue.component('process', require('./components/process.vue'));
Vue.component('challenges', require('./components/challenges.vue'));
Vue.component('team', require('./components/team.vue'));
Vue.component('bottom', require('./components/bottom.vue'));


const app = new Vue({
    el: '#app',
    created() {}
});

var AOS = require('aos/dist/aos.js');
AOS.init({
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});
