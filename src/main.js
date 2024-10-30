import { createApp } from 'vue';
import App from './MainView.vue';
import router from './router'; // Verifica la ruta aquí

// Importaciones de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);
app.use(router); // Asegúrate de que esta línea esté presente
app.mount('#app');
