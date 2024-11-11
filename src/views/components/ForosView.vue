<template>
    <div class="ContainerForos">
      <div class="Titulo">
        <h1>FOROS</h1>
      </div>
      <div class="Buscador">
        <input type="text" placeholder="Buscar un foro">
        <button type="button">Buscar</button>
      </div>
      
        <div class="Foros-Container">
          <div class="foro">
            <h2 class="foro-titulo">FORO DE APOYO EMOCIONAL</h2>
            <div class="bajoForo">
              <p class="foro-descripcion">
            Un espacio para compartir experiencias, estrategias y recursos sobre cómo lidiar con la ansiedad y el estrés diario. 
              </p>
            <button class="foro-boton">ENTRAR</button>
            </div>
          
          </div>
        
        </div>
     
         <div class="foro">
            <h2 class="foro-titulo">FORO DE APOYO EMOCIONAL</h2>
            <div class="bajoForo">
              <p class="foro-descripcion">
            Un espacio para compartir experiencias, estrategias y recursos sobre cómo lidiar con la ansiedad y el estrés diario. 
              </p>
            <button class="foro-boton">ENTRAR</button>
            </div>
          
          </div>
        
  
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'ForosView',
    props: {
      msg: String
    },
    
    components: {
      
      
    }
  
  }
    </script>
  
  <style scoped>
  
  .Titulo{
  /* background-color: red; */
  }
  .Titulo h1{
    font-weight:700;
    font-size: 60px;
  }
  .Buscador{
    margin: auto;
    align-items: center;
    padding: 2rem;
    padding-top: 0;
    /* background-color: red; */
    display: flex;
    gap: 10px;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    height: auto;
  }
  
  .Buscador input {
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    border-radius: 5px;
    width: 50%;
    max-width: 500px;
    height: 15%;
    max-height: 75px
  }
  
  .Buscador input:focus {
    border-color: #332C5C; /* Un tono azul suave */
    box-shadow: 0 0 10px rgba(163, 216, 244, 0.5); /* Suavidad y un toque de brillo */
  }
  .Buscador button {
    outline: none;
    border: 1px solid #ccc;
    padding: 7px;
    margin: 0;
    border-radius: 3px;
    background-color: #ffdbdc;
    height: 10%;
    max-height: 50px;
    width: 15%;
    max-width: 100px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }
  
  .Buscador button:hover {
    background-color: #ffc2c4; /* Color de fondo al pasar el cursor */
    box-shadow: 0 0 8px rgba(255, 200, 202, 0.6); /* Luz tenue alrededor */
    transform: translateY(-5px); /* Movimiento hacia arriba */
  }
  
  .Buscador button:focus {
    background-color: #ffc2c4;
    box-shadow: 0 0 8px rgba(255, 200, 202, 0.6);
    transform: none; /* Mantener la posición original cuando está enfocado */
  }
  
  .Buscador button:active {
    transform: translateY(0); /* Regresa a la posición original al hacer clic */
  }
  
  
  /* ======================= FOROS ====================== */
  
  
  .Foros-Container{
    display: inline-block;
    width: 100%;
    max-width: 1000;
    height: auto;
  
  }
  .foro {
    background-color: #a5e7e7; /* Color menta */
    padding: 10px 20px;
    padding-top: 10px;
    border-radius: 80px; /* Bordes redondeados para el efecto de óvalo */
    width: 90%; /* Ajusta el tamaño según tus necesidades */
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
  }
  
  .foro-titulo {
    /* padding-top: ; */
    background-color: #ffffff;
    border-radius: 6px;
    width: 50%;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin: auto;
    color: #333; /* Color del texto del título */
  }
  
  
  .bajoForo{
    /* height: auto; */
    width: 80%;
    display: flex;
    margin :auto;
    /* background-color: red; */
    align-items: center;
    gap: 10px;
  }
  .foro-descripcion {
    font-size: 16px;
    color: #333;
    margin: 10px 0 20px;
  }
  
  .foro-boton {
    background-color: #332C5C; /* Color del botón */
    height: 40px;
    width: 100%;
    max-width: 150px;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .foro-boton:hover {
    background-color: #5d50a8; /* Color al pasar el cursor por encima */
    transform: translateY(-5px); /* Movimiento hacia arriba */
  }
  
  
  </style>
  