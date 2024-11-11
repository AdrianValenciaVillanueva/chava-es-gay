<template>
  <div class="ContainerForos">
    <AyudaBar></AyudaBar>
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
  </div>
</template>

<script>
import AyudaBar from './Ayuda.vue';

export default {
  name: 'ForosView',
  props: {
    msg: String
  },
  components: {
    AyudaBar,
  }
}
</script>

<style scoped>
.Titulo h1 {
  font-weight: 700;
  font-size: 60px;
}

.Buscador {
  margin: auto;
  align-items: center;
  padding: 2rem;
  padding-top: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
}

.Buscador input {
  outline: none;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 5px;
  width: 50%;
  max-width: 500px;
}

.Buscador input:focus {
  border-color: #332C5C;
  box-shadow: 0 0 10px rgba(163, 216, 244, 0.5);
}

.Buscador button {
  outline: none;
  border: 1px solid #ccc;
  padding: 7px;
  border-radius: 3px;
  background-color: #ffdbdc;
  max-height: 50px;
  max-width: 100px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.Buscador button:hover {
  background-color: #ffc2c4;
  box-shadow: 0 0 8px rgba(255, 200, 202, 0.6);
  transform: translateY(-5px);
}

.Buscador button:focus {
  background-color: #ffc2c4;
  box-shadow: 0 0 8px rgba(255, 200, 202, 0.6);
}

.Buscador button:active {
  transform: translateY(0);
}

.Foros-Container {
  display: inline-block;
  width: 100%;
}

.foro {
  background-color: #a5e7e7;
  padding: 10px 20px;
  border-radius: 80px;
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.foro-titulo {
  background-color: #ffffff;
  border-radius: 6px;
  width: 50%;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  color: #333;
}

.bajoForo {
  width: 80%;
  display: flex;
  margin: auto;
  align-items: center;
  gap: 10px;
}

.foro-descripcion {
  font-size: 16px;
  color: #333;
  margin: 10px 0 20px;
}

.foro-boton {
  background-color: #332C5C;
  height: 40px;
  max-width: 150px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.foro-boton:hover {
  background-color: #5d50a8;
  transform: translateY(-5px);
}

/* Media Queries */
@media (max-width: 590px) {
  main {
    margin-top: 5px;
  }
  .tab-result-content h4 {
    font-size: 5px;
  }
  .navbar-admin {
    top: 5;
    position: relative;
    padding: 2em;
    height: auto;
  }
  .team-and-id-obj {
    flex-flow: column;
    font-size: 0.8rem;
    gap: 15px;
  }
  .imgtext {
    gap: 10px;
  }
  .imgtext img {
    left: 0;
  }
}

@media (min-height: 1100px), (min-width: 1815px) {
  .tab-result-content h4 {
    font-size: 5px;
  }
  .team-and-id-obj {
    font-size: 1.8em;
  }
  .imgtext {
    gap: 10px;
  }
  .imgtext img {
    left: 0;
  }
}
</style>
