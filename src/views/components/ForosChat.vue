<template>
  <div>
    <div class="Titulo"><h1>Foro General</h1></div>
    <div class="Foro" ref="foroContainer">
      <div v-for="(item, index) in posts" :key="index" :class="item.id_usuario==this.IdUsuario ? 'PreguntaUsuario' : 'PreguntaCaja'" ref="post">
        <div class="Icono" v-if="item.id_usuario==this.IdUsuario">
          <img :src="userIcon" alt="icono de apoyo emocional" class="user-icon"/>
        </div>
        <div class="CajaTexto">
          <p>{{ item.contenido }}</p>
          <p :class="item.id_usuario==this.IdUsuario ? 'fecha-usuario' : 'fecha-resto'">{{ formatDate(item.fecha_publicacion) }}</p>
        </div>
        <div class="Icono IconoDerecha" v-if="item.id_usuario!=this.IdUsuario">
          <img :src="userIcon" alt="icono de apoyo emocional" class="user-icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import userIcon from '../assets/user.png';

export default {
  name: 'ForoApoyoEmocional',
  props: {
    posts: {
      type: Array,
      required: true
    },
    IdUsuario: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      userIcon,
    };
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'dd/MM/yyyy HH:mm');
    }
  },
  watch: {
  posts() {
    this.$nextTick(() => {
      if (this.$refs.post && this.$refs.post.length) {
        const lastPost = this.$refs.post[this.$refs.post.length - 1];
        if (lastPost) {
          lastPost.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
},
updated() {
  this.$nextTick(() => {
    if (this.$refs.post && this.$refs.post.length) {
      const lastPost = this.$refs.post[this.$refs.post.length - 1];
      if (lastPost) {
        lastPost.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
  
};
</script>

<style scoped>
/* =================================== TÍTULO =========================================== */
.Titulo h1 {
  font-size: 2.5rem;
  color: #2d234a; /* Color similar al del título en la imagen */
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
}

/* =================================== CONTENEDOR GENERAL =========================================== */
.Foro {
  margin: auto;
  width: 100%;
  max-width: 1920px;
  padding: 0 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: auto; /* Asegúrate de que el contenedor sea desplazable */
  max-height: 80vh; /* Ajusta la altura máxima según sea necesario */
}

/* =================================== TEXTO DE PERSONAS =========================================== */
.PreguntaCaja {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #bab0e8;
  border-radius: 10px;
  padding: 1rem;
  max-width: 800px;
  width: 50%;
  margin: 1rem 0;
  margin-left: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

/* =================================== TEXTO DEL USUARIO =========================================== */
.PreguntaUsuario {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #a6edeb; /* Color de fondo de la caja */
  border-radius: 10px;
  padding: 1rem;
  max-width: 800px;
  width: 50%;
  margin: 1rem 0;
  margin-right: 2rem; /* Alinea la caja a la derecha */
  align-self: flex-end; /* Coloca la caja en el extremo derecho del contenedor */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

/* =================================== ICONOS =========================================== */
.Icono {
  position: absolute;
  top: -10px;
  background-color: #e0f0ff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.Icono img {
  width: 24px;
  height: 24px;
}

.fecha {
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
}

.fecha-usuario {
  width: 30rem;
  text-align: right;
}

.fecha-resto {
  width: 28rem;
  text-align: left;
}

/* Posición del icono en la izquierda para un usuario externo */
.PreguntaCaja .Icono {
  left: -40px;
}

/* Posición del icono en la derecha para el usuario */
.IconoDerecha {
  right: -40px;
}

/* =================================== ESTILOS DE TEXTO =========================================== */
.CajaTexto {
  text-align: justify;
  padding: 1rem;
  font-size: 1rem;
  color: #000;
  text-align: left;
}

/* =================================== MEDIA QUERY =========================================== */
@media (max-width: 768px) {
  .Titulo h1 {
    font-size: 1.8rem; /* Reduce el tamaño del título en pantallas pequeñas */
  }

  .PreguntaCaja {
    width: 100%; /* Hacer que las cajas ocupen el 100% del ancho */
    margin-left: 0; /* Quitar márgenes laterales */
    margin-right: 0;
  }
  .PreguntaUsuario{
    width: 100%; /* Hacer que las cajas ocupen el 100% del ancho */
    display: flex;
    margin-left: 0; /* Quitar márgenes laterales */
    margin-right: 0;
    justify-content: flex-end;
  }

  .Icono {
    position: static; /* Hacer que el icono se posicione de forma estática para que no se salga del contenedor */
    margin-bottom: 0.5rem; /* Añadir margen debajo del icono */
  }

  .CajaTexto {
    font-size: 0.9rem; /* Reducir tamaño de texto */
    padding: 0.5rem; /* Reducir padding */
  }

  .fecha-usuario {
    width: auto;
    text-align: center;
}

.fecha-resto {
  width: auto;
  text-align: center;
  margin: 0;
}
}
</style>