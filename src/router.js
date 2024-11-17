import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/App.vue'; // Ajusta la ruta si es necesario
import IniciarSesion from './views/IniciarSesion.vue';
import Foros from './views/Foros.vue';
import ForosIn from './views/ForosIn.vue';
import CrearCuenta from './views/CrearCuenta.vue';

const routes = [
  {
    path: '/', name: 'Inicio', component: Inicio,
  },
  {
    path: '/iniciar-sesion', name: 'IniciarSesion', component: IniciarSesion,
  },
  {
    path: '/foros', name: 'Foros', component: Foros,
  },
  {
    // Temporal: Esta ruta dependerá de la BD y el foro seleccionado
    path: '/foro-chat', name: 'ForosChat', component: ForosIn,
  },
  {
    path: '/crear-cuenta', name: 'CrearCuenta', component: CrearCuenta, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Desplázate al elemento con el id correspondiente al hash
      return {
        el: to.hash,
        behavior: 'smooth', // Animación suave para mejor UX
      };
    }
    // Si hay una posición guardada (al usar los botones atrás/adelante), restaura esa posición
    if (savedPosition) {
      return savedPosition;
    }
    // Por defecto, comienza desde el inicio de la página
    return { top: 0 };
  },
});

export default router;

