import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import 'animate.css'
import './assets/css/tailwind.css'
import './assets/fontawesome/css/all.css'

createApp(App).use(router, VueToast).mount('#app')
