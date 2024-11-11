<template>
    <div class="container mt-4">
      <BannerAyuda/>
    </div>
    <ForosView/>
</template>
    
    <script>
    import BannerAyuda from './components/BannerAyuda.vue';
    import ForosView from './components/ForosView.vue';

    export default {
      name: 'IniciarSesion',
      components: {
        BannerAyuda,
        ForosView
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