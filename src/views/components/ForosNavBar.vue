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
          <li :class="['nav-item', { active: isActive('Inicio') }]">
            <router-link to="/" class="nav-link custom-color" @click="setActive('Inicio')">INICIO</router-link>
          </li>
          <li :class="['nav-item', { active: isActive('contactanos') }]">
            <router-link :to="{ path: '/', hash: '#contactanos' }" class="nav-link custom-color">CONTACTANOS</router-link>
          </li>

          <!-- Opciones de usuario -->
          <li class="nav-item">
            <span class="nav-link custom-color">👤 {{ usuario.nombre }} ({{ usuario.codigo }})</span>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link custom-color" @click="logout">CERRAR SESIÓN</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
Script actualizado:
En el script, importa axios o fetch y reutiliza la lógica del logout y la verificación del usuario que ya implementaste en la barra principal. Agrega usuario y el método logout al componente.

vue
Copiar código
<script>
import axios from 'axios';

export default {
  name: 'ForosNavBar',
  data() {
    return {
      activeItem: 'home',
      logo: require('@/views/assets/logo.png'),
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
          withCredentials: true, // Enviar cookies al backend
        });
        this.usuario = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
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
            this.$router.push('/iniciar-sesion'); // Redirigir a la página de inicio de sesión
          } else {
            console.error('Error al cerrar sesión');
          }
        })
        .catch((err) => {
          console.error('Error en la petición:', err);
        });
    },
  },
  mounted() {
    this.checkLoginStatus(); // Verificar datos del usuario al cargar
  },
};
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