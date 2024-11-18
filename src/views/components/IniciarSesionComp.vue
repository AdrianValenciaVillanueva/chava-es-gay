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

            <div class="redireccion">
                <div class="redireccion-item">
                    <p>¿Olvidaste tu contraseña?</p>
                    <button>Recuperar</button>
                </div>
                <div class="redireccion-item">
                    <p>¿No tienes una cuenta?</p>
                    <router-link to="/crear-cuenta">
                    <button>Registrate</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

export default {
  name: 'InicioComp',
  data() {
    return {
      correo: '',
      contrasenia: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
    methods: {
    async enviar() {
    if (!this.correo || !this.contrasenia) {
        Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.'
        });
    return;
    }
    // Aquí va lo de la BD Adrian
    try{
        const response  = await axios.post("http://127.0.0.1:3000/api/usuarios/login",{
          correo: this.correo,
          contrasena: this.contrasenia,
        });
        console.log("Inicio de sesión exitoso", response.data);

        Swal.fire({ 
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Redirigiendo...'
        }).then(() => {
            this.router.push({ name: 'Foros' });
        });
    } catch (error){
        console.log(error.response.data);
        if (error.response) {
            console.error('Error en la respuesta del servidor:', error.response.data);
            switch (error.response.status) {
                case 401: //Credenciales incorrectas
                case 404: //Usuario no encontrado
                    Swal.fire({
                    icon: 'error',
                    title: 'Error al iniciar sesión',
                    text: 'Correo o contraseña incorrectos.',
                    });
                break;
            case 500: //Problema en el servidor
                Swal.fire({
                icon: 'error',
                title: 'Error del servidor',
                text: 'Ocurrió un problema en el sistema. Intenta más tarde.',
                });
                break;
            default: //Otros errores
                Swal.fire({
                icon: 'error',
                title: 'Error desconocido',
                text: 'Algo salió mal. Intenta nuevamente.',
                });
            }
        } else if (error.request) {
            // No hubo respuesta del servidor
            console.error('No se recibió respuesta del servidor:', error.request);
            Swal.fire({
            icon: 'error',
            title: 'Error de conexión',
            text: 'No se pudo conectar al servidor. Verifica tu red.',
            });
        } else {
            // Otro tipo de error
            console.error('Error inesperado:', error.message);
            Swal.fire({
            icon: 'error',
            title: 'Error inesperado',
            text: 'Ocurrió un problema. Intenta nuevamente.',
            });
        }
    }
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
    align-items: center;
}

.textfield1, .textfield2 {
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 600px; /* Ancho igual para ambos textfields */
}

label {
    font-size: 1.5rem;
    color: #000000;
    text-align: justify;
}

.textfield1 input,
.textfield2 input {
    width: 100%;
    height: 60px;
    border-radius: 50px;
    margin-bottom: -15px;
    padding: 8px;
    font-size: 1.2rem;
    border: 1px solid #4A4085;
    text-align: left;
}

.input-container {
    margin-top: -15px;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

input[type="text"]:focus, input[type="password"]:focus {
    border-color: #574a8b; 
    box-shadow: 0px 0px 8px rgba(87, 74, 139, 0.5); 
    outline: none; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.BotonEn:focus {
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease;
}

.BotonEn {
    margin-top: 15px;
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
    width: 200px;
    height: 60px;
    background-color: #FFDBDC;
    color: #000000;
    font-size: 1.2rem;
    border: 2px solid #000000;
    border-radius: 10px;
    cursor: pointer;
}

.redireccion-item button:hover {
    background-color: #574a8b;
    color: #FFFFFF;
}

.redireccion-item button:focus {
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease;
}

@media (max-width: 768px) {
    .Principal h1 {
        font-size: 3rem;
    }

    label, .input {
        font-size: 1.2rem;
    }

.textfield2, .textfield1{
        align-self: center;
        width: 90%;
    }
.textfield2 input, .textfield1 input{
    font-size: 1rem;
    }
    
.BotonEn{
    width: 180px;
    font-size: 1rem;
}
.redireccion-item{
    width: 110%;
    font-size: 1rem;
    font-weight: bold;
}
.redireccion-item button{
    width: 140px;
    height: 50px;
}

}
</style>
