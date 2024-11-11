//Este es el archivo donde se colocan todas las rutas
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/App.vue'; // Asegúrate de que esta ruta coincida con la ubicación de tu componente
import IniciarSesion from './views/IniciarSesion.vue';
import Foros from './views/Foros.vue';
import ForosIn from './views/ForosIn.vue';

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
    //La siguiente ruta sera temporal, ya que dependera de la BD y el foro seleccionado
    path: '/foro-chat', name: 'ForosChat', component: ForosIn,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
