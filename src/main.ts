import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Lenis from 'lenis';
const lenis = new Lenis();

createApp(App).mount('#app');
export { lenis };
