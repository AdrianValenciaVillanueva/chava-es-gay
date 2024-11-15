<template>
    <div class="cards-container">
      <div class="apoyo-card">
        <div class="text-content">
          <div class="title">{{ title }}</div>
          <div class="description">{{ description }}</div>
        </div>
  
        <iframe
          v-if="embeddedVideoUrl"
          class="video-player"
          :src="embeddedVideoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div v-else class="play-icon">▶️</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Apoyo 1'
      },
      description: {
        type: String,
        default: 'Descripción breve de blog'
      },
      videoUrl: {
        type: String,
        default: ''
      }
    },
    computed: {
      embeddedVideoUrl() {
        if (this.videoUrl.includes('youtube.com/watch')) {
          const videoId = this.videoUrl.split('v=')[1].split('&')[0];
          return `https://www.youtube.com/embed/${videoId}`;
        } else if (this.videoUrl.includes('youtu.be/')) {
          const videoId = this.videoUrl.split('youtu.be/')[1];
          return `https://www.youtube.com/embed/${videoId}`;
        }
        return this.videoUrl;
      }
    }
  }
  </script>
  
  <style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Dos columnas por fila */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .apoyo-card {
    display: flex;
    width: 100%;
    height: 250px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #d7e3fc;
    color: #000;
    font-family: Arial, sans-serif;
  }
  
  .text-content {
    flex: 1;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .title {
    font-weight: bold;
    font-size: 20px;
    color: #4a4a8f;
  }
  
  .description {
    font-size: 16px;
    color: #333;
    margin-top: 5px;
  }
  
  .video-player {
    width: 45%;
    height: 100%;
    border-radius: 10px;
  }
  
  .play-icon {
    width: 45%;
    font-size: 30px;
    color: #f00;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  