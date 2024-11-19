<template>
  <div>
    <NavBarIniciarSesion/>
    <div class="container mt-4">
      <ForosChat :posts="posts"/>
    </div>

    <div class="ComentarioSeccion">
      <input
        type="text"
        class="ComentarioInput"
        placeholder="Pregunta o cuenta algo en el foro"
        v-model="comentario"
      />
      <button class="ComentarioBoton" @click="publicarComentario">Publicar</button>
    </div>
  </div>
</template>

<script>
import ForosChat from './components/ForosChat.vue';
import NavBarIniciarSesion from './components/NavBarIniciarSesion.vue';
import axios from 'axios';
import io from 'socket.io-client';

export default {
  name: 'IniciarSesion',
  components: {
    ForosChat,
    NavBarIniciarSesion,
  },
  data() {
    return {
      comentario: '',
      socket: null,
      id_foro: '60d0fe4f5311236168a109ca', // Ajusta esto según tu lógica
      posts: [],
      mensaje: ''
    };
  },
  mounted() {
    this.socket = io('http://127.0.0.1:3000', { withCredentials: true });
    this.socket.on('newPost', (post) => {
      this.posts.push(post); // Agregar el nuevo post a la lista de posts
    });

    // Cargar los posts iniciales
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/posts', {
          withCredentials: true
        });
        this.posts = response.data;
      } catch (error) {
        console.error('Error al cargar los posts:', error.response.data);
      }
    },
    async publicarComentario() {
      if (this.comentario.trim() !== '') {
        try {
          const response = await axios.post('http://127.0.0.1:3000/api/posts', {
            id_foro: this.id_foro,
            contenido: this.comentario
          }, {
            withCredentials: true // Esto asegura que las cookies se envíen con la solicitud
          });
          this.mensaje = 'Post creado exitosamente';
          console.log('Post creado:', response.data);
          this.comentario = ''; // Limpiar el campo de comentario
        } catch (error) {
          this.mensaje = 'Error al crear el post';
          console.error('Error al crear el post:', error.response.data);
        }
      } else {
        alert("Por favor, escribe algo antes de publicar.");
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  margin-bottom: 7%;
}
.ComentarioSeccion {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #2d234a;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.2); /* Sombra para mayor visibilidad */
}
.ComentarioInput {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #666;
  margin-right: 1rem;
}
.ComentarioBoton {
  background-color: #a6edeb;
  color: #2d234a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.ComentarioBoton:hover {
  background-color: #89d4d2;
}
</style>