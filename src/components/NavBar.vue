<template>
  <nav class="navbar navbar-expand-lg">
    
    <div class="container-fluid justify-content-around">

      <a class="navbar-brand">
        <img :src="logo" alt="Logo" height="90 ">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav w-100 justify-content-around">
          <li :class="['nav-item', { active: isActive('Inicio') }]">
            <a class="nav-link custom-color" href="#Inicio" @click="setActive('home')">INICIO</a>
          </li>
          <li :class="['nav-item', { active: isActive('foros') }]">
            <a class="nav-link custom-color" href="#foros" @click="setActive('foros')">FOROS</a>
          </li>
          <li :class="['nav-item', { active: isActive('contactanos') }]">
            <a class="nav-link custom-color" href="#pricing" @click="setActive('contactanos')">CONTACTANOS</a>
          </li>
          <li :class="['nav-item', { active: isActive('iniciar-sesion') }]">
            <a class="nav-link custom-color" href="#contact" @click="setActive('iniciar-sesion')">INICIAR SESION</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeItem: 'home',
      logo: require('@/assets/logo.png')
    }
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },
    isActive(item) {
      return this.activeItem === item;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #CFF6FF;
  padding-left: 20px;
}
.custom-color{
  color:#4A4085;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.5rem;
}
.custom-color:hover, .custom-color:focus {
  outline: 2px solid #4A4085;
}

/* Consulta de medios para pantallas pequeñas */
@media (max-width: 768px) {
  .custom-color {
    font-size: 1rem; /* Tamaño de fuente original */
    padding: 0.5rem; /* Espaciado original */
  }
  .navbar {
    padding: 0;
  }
  .navbar img{
    height: 5re5;
  }

  /* Sombra para el botón de toggler */
.navbar-toggler {
  height: 3rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Ajusta los valores según tus necesidades */
}

}
</style>