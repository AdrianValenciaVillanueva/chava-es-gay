<template>
    <div class="Principal">
        <h1 class="Titulo">INICIAR SESIÓN</h1>
        <div class="Formulario">
            <div class="textfield1">
                <label for="correo">Correo electronico</label>
                <input
                    type="text"
                    id="correo"
                    v-model="correo"
                    placeholder="correo@example.com"
                />
            </div>
            <div class="textfield2">
                <label for="contrasenia">Contraseña</label>
                <div class="input-container">
                    <input
                        type="password"
                        id="contrasenia"
                        v-model="contrasenia"
                    />
                    <button class="BotonEn" @click="enviar">Enviar</button>
                </div>
            </div>

            <!-- Contenedor de los botones de redirección dentro del formulario -->
            <div class="redireccion">
                <div class="redireccion-item">
                    <p>¿Olvidaste tu contraseña?</p>
                    <button>Recuperar</button>
                </div>
                <div class="redireccion-item">
                    <p>¿No tienes una cuenta?</p>
                    <button>Registrate</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'InicioComp',
  data() {
    return {
      correo: '',
      contrasenia: ''
    };
  },
methods: {
    async enviar() {
    // Aquí verifica que todos los campos estén llenos
    if (!this.correo || !this.contrasenia) {
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
}
</script>

<style scoped>
.Principal {
    padding-top: 30px;
    align-items: center;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
}

.Principal h1 {
    color: #332C5C;
    font-size: 3.5rem;
    font-weight: bold;
}

.Formulario {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    position: relative; 
}

.textfield1, .textfield2 {
    display: flex;
    flex-direction: column;
    gap: 0px;
}

label {
    font-size: 1.5rem;
    color: #000000;
    text-align: justify;
}

.textfield1 input {
    text-align: justify;
    width: 600px;
    height: 60px;
    border-radius: 50px;
    margin-bottom: -15px;
}

.textfield2 {
    display: flex;
    flex-direction: column;
}

/* Contenedor input + boton */
.input-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

.input-container input {
    height: 60px;
    width: 100%; 
    border-radius: 50px;
}

input {
    padding: 8px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: left;
    max-width: 100%;
    width: 100%;
}

input[type="text"]:focus, input[type="password"]:focus {
    border-color: #574a8b; 
    box-shadow: 0px 0px 8px rgba(87, 74, 139, 0.5); 
    outline: none; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transición suave */
}

.BotonEn:focus {
    outline: none;
    transform: scale(1.05); /* Agranda un poco el botón al hacer clic */
    transition: transform 0.2s ease; /* Transición suave en el tamaño */
}


.BotonEn {
    background-color: #332C5C;
    color: #FFFFFF;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 250px;
    height: 60px;
}

.BotonEn:hover {
    background-color: #574a8b;
}

/* Alineación de los botones de redirección */
.redireccion {
    display: flex;
    justify-content: space-between; 
    width: 100%;
    margin-top: 10px; 
}

.redireccion-item {
    display: flex;
    font-size: 1.3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48%; /* El 48% del espacio para cada botón */
}

.redireccion-item button {
    padding: 15px 30px;
    background-color: #FFDBDC;
    color: #000000;
    font-size: 1rem;
    border: 1px;
    border-radius: 10px;
    cursor: pointer;
}

.redireccion-item button:hover {
    background-color: #574a8b;
    color:#FFFFFF;
}
.redireccion-item button:focus {
    outline: none;
    transform: scale(1.05); /* Agranda un poco los botones de redirección */
    transition: transform 0.2s ease;
}
</style>
