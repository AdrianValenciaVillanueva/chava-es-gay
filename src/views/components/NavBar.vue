<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid justify-content-around">
      <a class="navbar-brand">
        <img :src="logo" alt="Logo" height="90">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-around">
          <!-- Links comunes -->
          <li :class="['nav-item', { active: isActive('contactanos') }]">
            <a class="nav-link custom-color" href="#contactanos">CONTACTANOS</a>
          </li>

          <!-- Si no está logueado -->
          <template v-if="!isLoggedIn">
            <li :class="['nav-item', { active: isActive('foros') }]">
            <router-link to="/iniciar-sesion" class="nav-link custom-color" @click="setActive('foros')">FOROS</router-link>
          </li>
            <li :class="['nav-item', { active: isActive('iniciar-sesion') }]">
              <router-link to="/iniciar-sesion" class="nav-link custom-color" @click="setActive('iniciar-sesion')">INICIAR SESIÓN</router-link>
            </li>
            <li :class="['nav-item', { active: isActive('crear-cuenta') }]">
              <router-link to="/crear-cuenta" class="nav-link custom-color" @click="setActive('crear-cuenta')">CREAR CUENTA</router-link>
            </li>
          </template>

          <!-- Si está logueado -->
          <template v-else>
            <li :class="['nav-item', { active: isActive('foros') }]">
            <router-link to="/foros" class="nav-link custom-color" @click="setActive('foros')">FOROS</router-link>
          </li>
            <li class="nav-item">
              <span class="nav-link custom-color">👤 {{ usuario.nombre }} ({{ usuario.codigo }})</span>
            </li>
            <li class="nav-item">
              <button class="nav-link btn btn-link custom-color" @click="logout">CERRAR SESIÓN</button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NavBar',
  data() {
    return {
      activeItem: 'home',
      logo: require('@/views/assets/logo.png'),
      isLoggedIn: false, // Indica si el usuario está logueado
      usuario: {}, // Datos del usuario logueado
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },
    isActive(item) {
      return this.activeItem === item;
    },
    async checkLoginStatus() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/usuarioLogeado', {
          withCredentials: true, // Envía las cookies al backend
        });
        this.usuario = response.data;
        this.isLoggedIn = true;
      } catch (error) {
        this.isLoggedIn = false; // No está logueado si hay error
      }
    },
  logout() {
  fetch('http://127.0.0.1:3000/api/usuarios/logout', {
    method: 'POST',
    credentials: 'include', 
  })
  .then((response) => {
    if (response.ok) {
      console.log('Sesión cerrada exitosamente');
      this.user = null;
      this.codigo = null;
      this.$router.push('/iniciar-sesion');
    } else {
      console.error('Error al cerrar sesión');
    }
  })
  .catch((err) => {
    console.error('Error en la petición:', err);
  });
}

  },
  mounted() {
    this.checkLoginStatus(); // Revisar si el usuario está logueado al cargar la barra
  },
};
</script>

<style scoped>
.navbar {
  background-color: #CFF6FF;
  padding-left: 20px;
}

.custom-color {
  color: #4A4085;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.5rem;
}

.custom-color:hover,
.custom-color:focus {
  outline: 2px solid #4A4085;
}

.navbar-toggler {
  height: 3rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .custom-color {
    font-size: 1rem;
    padding: 0.5rem;
  }
  .navbar {
    padding: 0;
  }
}
</style>
