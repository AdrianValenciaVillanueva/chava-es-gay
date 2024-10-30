<template>
    <div>
      <h1>Iniciar Sesión</h1>
      <p>Introduce tus credenciales para acceder.</p>
      <HelloWorld/>
    </div>
  </template>
  
  <script>
  import HelloWorld from './components/HelloWorld.vue';
  export default {
    name: 'IniciarSesion',
    components: {
        HelloWorld
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