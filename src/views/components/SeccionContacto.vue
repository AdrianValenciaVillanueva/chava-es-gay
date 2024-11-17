<template>
    <div class="principal">
        <p class="titulo">CONTACTANOS</p>
        <p class="descripcion">Si necesitas un trato más personal, CONTACTANOS!</p>
        <div class="contenido">
            <div class="textfields">
              <label for="nombre">Nombre<span class="required">*</span></label>
                <input
                    type="text"
                    id="nombre"
                    v-model="nombre"
                    placeholder="Ingresa tu nombre"
                />
            </div>
            <div class="textfields">
               <label for="correo">Correo Electrónico<span class="required">*</span></label>
                <input
                    type="text"
                    id="correo"
                    v-model="correo"
                    placeholder="Ingresa tu correo electronico"
                />
            </div>
            <div class ="selector">
              <label for="reunion">¿Cómo sería la reunión?<span class="required">*</span></label>
              <select v-model="reunion" id="reunion">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="videollamada">Video llamada</option> 
                <option value="llamada">Llamada</option>
                <option value="mensajes">Mensajes</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>
            <button class="botonEn" @click="enviar">Enviar</button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'SeccionContacto',
  data() {
    return {
      nombre: '',     
      correo: '',     
      reunion: ''     
    };
  },
  methods: {
    async enviar() {
    if (!this.nombre || !this.correo || !this.reunion) {
        Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.'
        });
    return;
    }
    // Aquí va lo de la BD Adrian
}
}
};
</script>

<style scoped>
.principal{
    padding-top: 60px;
    align-items: center;
    display: flex; 
    flex-direction: column; /* Agrupar elementos en columnas */
    justify-content: center; 
}

.titulo{
  font-size: 4rem;
  color: #4A4085;
  font-weight: bold;
  margin-bottom: 0px;
}

.descripcion{
  font-size: 2rem;
  color: #4A4085;
  font-weight: bold;
}

.textfields {
    width: 900px;
    text-align: justify;
    margin-bottom: 25px; /* Espacio entre los textfields */
}

.selector{
  text-align: left;
  margin-bottom: 25px; /*Igual, espacio entre el selector y el botón */
}

/*Este es cuando se selecciones los textfields y el selector */
.textfields input, .selector select {
    width: 100%; 
    text-align: left;
    padding: 15px; /* Espaciado interno para hacerlo más grande */
    font-size: 1.5rem; 
    border: 2px solid #4A4085; 
    border-radius: 10px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para un efecto más 3D */
    outline: none; /* Quitar el borde azul al hacer foco */
}

.textfields input:focus, .selector select:focus {
    border-color: #8A76C7; 
    box-shadow: 0 0 5px rgba(138, 118, 199, 0.5); /* Sombra al enfocar el campo */
}

/*Este es para la etiqueta que tendranlo textfields y el selector*/
.textfields label, .selector label {
    font-size: 1.5rem;
    color: black; 
    margin-bottom: 0px; 
}
/*Este es solo para el asterisco*/
.required {
    color: red; 
    font-size: 1.5rem; 
    margin-left: 3px; 
}

.botonEn{
  background-color: #4A4085;
  color: #FFFFFF;
  height: 60px;
  width: 400px;
  border: none;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: bold;
}

.botonEn:hover{
  background-color: #8A76C7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
@media (max-width: 1280px) {
  .textfields, .selector {
        width: 700px; 
        margin: auto;
    }

    .botonEn {
        margin-top: 30px;
        width: 300px; 
    }
}

@media (max-width: 768px) {
  .titulo {
        font-size: 2.5rem; 
    }

    .descripcion {
        font-size: 1.5rem;
    }

    .textfields, .selector {
        width: 90%; 
    }

    .botonEn {
      margin-top: 20px;
        width: 50%;
        height: 50px; 
        font-size: 1.2rem;
    }
    .textfields input, .selector select{
      padding: 10px;
      font-size: 1.2rem;
    }
    .textfields label, .selector label{
      font-size: 1.2rem;
    }
}
</style>
