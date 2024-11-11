<template>
  <NavBarIniciarSesion/>
  <IniciarSesionComp/>
  </template>
  
  <script>
  import IniciarSesionComp from './components/IniciarSesionComp.vue';
import NavBarIniciarSesion from './components/NavBarIniciarSesion.vue';
  export default {
    name: 'IniciarSesion',
    components: {
      NavBarIniciarSesion,
      IniciarSesionComp
    }
  }
  </script>
  
  <style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style> 