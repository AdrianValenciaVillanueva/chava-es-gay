<template>
      <ForosNavBar/>

    <div class="container mt-4">
      <BannerAyuda/>
    </div>
    <ForosView/>
</template>
    
    <script>
    import BannerAyuda from './components/BannerAyuda.vue';
    import ForosView from './components/ForosView.vue';
    import ForosNavBar from './components/ForosNavBar.vue';
    export default {
      name: 'IniciarSesion',
      components: {
        BannerAyuda,
        ForosView,
        ForosNavBar
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