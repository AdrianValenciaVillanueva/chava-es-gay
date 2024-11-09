<template>
    <div class="Titulo"><h1>Titulo Foro</h1></div>

    <div class="Foro">

        <div class="PreguntaCaja">
            <div class="Icono">
                <img src="ruta-del-icono.svg" alt="icono de apoyo emocional" />
            </div>
            <div class="CajaTexto">
                <p>Pregunta o historia que conta lorem40r</p>
            </div>
        </div>
        
        <div class="PreguntaUsuario">
            <div class="CajaTexto">
                <p>Pregunta o historia que contar</p>
            </div>
            <div class="Icono IconoDerecha">
                <img src="ruta-del-icono.svg" alt="icono de apoyo emocional" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ForoApoyoEmocional',
};
</script>

<style scoped>


.Titulo h1 {
    font-size: 2.5rem;
    color: #2d234a; /* Color similar al del título en la imagen */
    text-align: center;
    font-weight: bold;
    margin-top: 1rem;
}

.Foro {
    margin: auto;
    width: 100%;
    max-width: 1920px;
    padding: 0 2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
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
    box-shadow: 0px 4px 6px rgba(0, 0, 0, .5);
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
    box-shadow: 0px 4px 6px rgba(0, 0, 0, .5);
}

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

/* Posicion del icono en la izquierda para un wey ajeno */
.PreguntaCaja .Icono {
    left: -40px;
}

/* Posicion del icono en la derecha parael  user */
.IconoDerecha {
    right: -40px;
}

.CajaTexto {
    text-align: justify;
    padding: 1rem;
    font-size: 1rem;
    color: #000;
    text-align: left;
}
</style>
