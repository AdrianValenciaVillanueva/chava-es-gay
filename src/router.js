//Este es el archivo donde se colocan todas las rutas
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/App.vue'; // Asegúrate de que esta ruta coincida con la ubicación de tu componente
import IniciarSesion from './views/IniciarSesion.vue';

const routes = [
  {
    path: '/', name: 'Inicio', component: Inicio,
  },
  {
    path: '/iniciar-sesion', name: 'IniciarSesion', component: IniciarSesion,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
