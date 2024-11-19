  <template>
    <div class="support-banner">
      <div class="text-container">
        <h1 class="title">NO ESTÁS SOL@</h1>
        <button class="forum-button">ÚNETE A LOS FOROS</button>
      </div>
      <div class="imagen">
        <img src="https://as2.ftcdn.net/v2/jpg/04/14/50/45/1000_F_414504539_4rD1PgwHEJuVH4Y4sKbOZs20na7qtLVn.jpg" alt="Personas apoyándose" />
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "SupportBanner",
  };
  </script>

  <style scoped>
  .support-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
  margin:auto;
  max-width: 1100px;
  max-height: 600px;
}

.text-container {
  flex: 1;
  padding-left: 50px;
  margin: auto;
}

.title {
  color: #4c3c86;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.forum-button {
  background-color: #f5d3e2;
  color: #4c3c86;
  border:solid 1px black;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Suaviza el movimiento y el cambio de color */
}

.forum-button:hover {
  background-color: #e8b7c8;
  transform: translateY(-5px); /* Mueve el botón hacia arriba 5px */
}


.imagen {
  flex: 1;
}

.imagen img {
  max-width: 100%;
  border-radius: 10px;
}

/* Media Queries */
@media (max-width: 590px) {
  .support-banner {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }

  .text-container {
    margin: 0 0 15px 0;
  }

  .title {
    font-size: 18px;
  }

  .forum-button {
    font-size: 14px;
    padding: 8px 15px;
  }

  .imagen img {
    max-width: 80%;
  }
}

@media (min-height: 1100px), (min-width: 1815px) {
  .support-banner {
    padding: 40px;
  }

  .title {
    font-size: 32px;
  }

  .forum-button {
    font-size: 18px;
    padding: 12px 25px;
  }

  .imagen img {
    max-width: 100%;
    border-radius: 15px;
  }
}
</style>
