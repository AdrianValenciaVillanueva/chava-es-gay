<template>
   <router-view/>
  <NavBar/>
    <div class="container mt-4">
      <BannerAyuda/>
    </div>
    <VideosApoyo/>
    <section id="contactanos">
    <SeccionContacto/>
    </section>
    <AyudaBar/>
    <FooterBar/>
    
</template>

<script>
import NavBar from './components/NavBar.vue';
import AyudaBar from './components/Ayuda.vue';
import BannerAyuda from './components/BannerAyuda.vue';
import SeccionContacto from './components/SeccionContacto.vue';
import VideosApoyo from './components/VideosApoyo.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  components: {

    NavBar,
    BannerAyuda,
    SeccionContacto,
    AyudaBar,
    VideosApoyo,
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style> 