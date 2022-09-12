import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

import './assets/css/animate.css'
import './assets/css/tailwind.css'
import './assets/fontawesome/css/all.css'

createApp(App).use(router).mount('#app')
