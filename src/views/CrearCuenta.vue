<template>
    <NavBarCrearCuenta/>
    <CrearCuentaComp/>
    </template>
    
    <script>
    import CrearCuentaComp from './components/CrearCuentaComp.vue';
    import NavBarCrearCuenta from './components/NavBarCrearCuenta.vue';
    

    export default {
      name: 'IniciarSesion',
      components: {
        NavBarCrearCuenta,
        CrearCuentaComp
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