import { createApp } from 'vue';
import './assets/main.css';

import App from './App.vue';
import Home from './components/Home.vue';
import router from './router'; // Import the router

const app = createApp(App);

app.component('home', Home);
app.use(router); // Use Vue Router

app.mount('#app');
