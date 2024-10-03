<template>
  <NavBar/>
    <div class="container mt-4">
      <h1>Welcome to the main app</h1>
    </div>
    <AyudaBar/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AyudaBar from './components/Ayuda.vue';

export default {
  name: 'App',
  components: {
    
    NavBar,
    AyudaBar,
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
