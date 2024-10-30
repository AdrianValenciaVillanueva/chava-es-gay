<template>
  <div class="recBanner">
    <p class="num">LINEA DE AYUDA: 800 911 2000</p>
  </div>
</template>

<script>
export default {
  name: 'BannerAyuda'
}
</script>

<style scoped>
.recBanner {
    background-color: #4A4085; 
    display: flex; 
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    height: 125px; 
    width: 100%;
    margin: 10px auto; 
    border-radius: 10px;
}

.num {
    font-size: 2.5rem;
    color: #FFFFFF;
    margin: 0; 
}
@media (max-width: 1280px) {
  .recBanner{
    height: 100px;
    width: 100%; /* Mantiene el 100% del ancho disponible */
    margin: 5px auto; 
  }
  .num{
  font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .recBanner{
    height: 75px;
    margin: 1px auto; /* Centrar el rectángulo */
  }
  .num{
  font-size: 1.5rem;
  }
}
</style>

