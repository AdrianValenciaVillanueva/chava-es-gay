<template>
    <div class="principal">
      <h1 class="Titulo lector">CREAR CUENTA</h1>
      <div class="textfield">
        <label for="nombre" class="lector">Nombre(s)</label>
        <input
          type="text"
          id="nombre"
          class="lector"
          v-model="nombre"
          placeholder="Coloca tu nombre o nombres"
        />
      </div>
      <div class="textfield">
        <label for="apellidos" class="lector">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          class="lector"
          v-model="apellidos"
          placeholder="Coloca tu apellido paterno y materno"
        />
      </div>
      <div class="contenedorDoble">
        <div class="textfield">
          <label for="codigo" class="lector">Código</label>
          <input
            type="number"
            id="codigo"
            class="lector"
            v-model="codigo"
            placeholder="Código UDG"
            min="9"
            max="9"
          />
        </div>
        <div class="selector">
          <label for="sexo" class="lector">Sexo</label>
          <select v-model="sexo" id="sexo" class="lector">
            <option value="" disabled selected></option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="noBinario">No binario</option>
            <option value="no">Prefiero no decirlo</option>
          </select>
        </div>
      </div>
      <div class="textfield">
        <label for="correo" class="lector">Correo institucional</label>
        <input
          type="text"
          id="correo"
          class="lector"
          v-model="correo"
          placeholder="correo@alumnos.udg.mx"
        />
      </div>
      <div class="contenedorDoble">
        <div class="textfield">
          <label for="contrasenia" class="lector">Contraseña</label>
          <input
            type="password"
            id="contrasenia"
            class="lector"
            v-model="contrasenia"
          />
        </div>
        <div class="textfield">
          <label for="confirmar" class="lector">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmar"
            class="lector"
            v-model="confirmar"
          />
        </div>
      </div>
      <button class="registrarse lector" @click="enviar">REGISTRARSE</button>
    </div>
  </template>
  

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {
  name: 'InicioComp',
  data() {
    return {
        nombre: '',
        apellidos: '',
        codigo: '',
        sexo: '',
        correo: '',
        contrasenia: '',
        confirmar: ''
    };
  },
 
  mounted() {
    // Inicializar la API de Web Speech en los elementos con clase "lector"
    const synth = window.speechSynthesis;

    function speak(text) {
      if (synth.speaking) {
        synth.cancel(); // Detener cualquier lectura previa
      }
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }

    // Agregar eventos de ratón para los elementos con la clase "lector"
    document.querySelectorAll('.lector').forEach((element) => {
      element.addEventListener('mouseover', () => {
        const text = element.innerText || element.placeholder;
        if (text) {
          speak(text);
        }
      });
    });
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async enviar() {
    if (!this.nombre || !this.apellidos || !this.codigo || !this.sexo || !this.correo || !this.contrasenia || !this.confirmar) {
        Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.'
        });
    return;
    }
    if (this.contrasenia != this.confirmar){
        Swal.fire({
        icon: 'warning',
        title: 'Contraseña incorrecta',
        text: 'Diferentes contraseñas insertadas'    
        });
        return;
    }

    try{
        const response  = await axios.post("http://127.0.0.1:3000/api/usuarios",{
          nombre: this.nombre,
          apellidos: this.apellidos,
          codigo: this.codigo,
          sexo: this.sexo,
          correo: this.correo,
          contrasena: this.contrasenia,
        });
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'Redirigiendo a foros...',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          this.$router.push('/iniciar-sesion');
        });
      }catch(error){
        console.log(error.response.data);
        if (error.response && error.response.data && error.response.data.error && error.response.data.error.includes('E11000 duplicate key error')) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario ya existente'
          });
        }else if (error.response.data.error.includes('Usuario validation failed: contrasena')) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Contraseña debe ser alfanumérica, con números y al menos un símbolo especial'
            });
        } else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo institucional no es válido'
        });
        }
      }
    
},

}
}
</script>

<style scoped>
/* Estilo principal */
.principal {
    padding-top: 50px;
    align-items: center;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 10px; /* Espaciado uniforme entre los elementos */
}

.Titulo {
    color: #332C5C;
    font-size: 3.5rem;
    font-weight: bold;
}

label{
    text-align: justify;
    font-size: 1.5rem;
    color: #000000
}

.textfield {
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 600px; 
}

.textfield input {
    height: 60px;
    text-align: justify;
    border-radius: 50px;
    padding: 0 20px;
    font-size: 1.2rem;
    border: 1px solid #4A4085;
    box-sizing: border-box;
}

.textfield input:focus {
    border-color: #574a8b; 
    box-shadow: 0px 0px 8px rgba(87, 74, 139, 0.5); 
    outline: none; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Contenedor doble para inputs y select */
.contenedorDoble {
    display: flex;
    justify-content: space-between; /* Espaciado entre los elementos */
    gap: 20px; /* Separación entre los elementos */
    width: 600px; /* Mantiene la misma anchura */
}

.contenedorDoble .textfield, .contenedorDoble .selector {
    flex: 1; /* Hace que ocupen el mismo espacio */
}

.selector{
    text-align: justify;
}

.selector select {
    width: 100%;
    height: 60px;
    border-radius: 50px;
    font-size: 1.2rem;
    padding: 0 20px;
    border: 1px solid #4A4085;
    text-align: justify; 
}

.selector label {
    font-size: 1.5rem;
    color: #000000
}

.selector select:focus {
    border-color: #574a8b;
    box-shadow: 0px 0px 8px rgba(87, 74, 139, 0.5); 
    outline: none; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Botón de registro */
.registrarse {
    background-color: #332C5C;
    color: #FFFFFF;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 300px;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
}

.registrarse:hover {
    background-color: #574a8b;
}

.registrarse:focus {
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease;
}

/* Adaptación responsiva */
@media (max-width: 768px) {
    .principal {
        padding: 20px;
        padding-right: 40px;
        padding-left: 40px;
    }

    .Titulo{
        font-size: 3rem;
    }
    label, input, .selector, .selector label{
        font-size: 1.2rem;
    }
    .textfield, .contenedorDoble{
        width: 100%; 
    }

    .registrase{
        width: 180px;
    }

    .contenedorDoble {
        flex-direction: column; /* Cambia a columna en pantallas pequeñas */
        gap: 10px;
    }
}
</style>
