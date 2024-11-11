import { createApp } from 'vue';
import App from './MainView.vue';
import router from './router'; 

// Importaciones de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);
app.use(router); 
app.mount('#app');
