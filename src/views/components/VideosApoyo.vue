<template>
    <div class="container" aria-labelledby="header">
      <h2 id="header" class="header" aria-live="polite">BLOGS DE APOYO</h2>
      <div class="cards-container" aria-label="Tarjetas de apoyo">
        <div class="apoyo-card" 
             v-for="(item, index) in items" 
             :key="index"
             :style="{ backgroundColor: item.backgroundColor || '#d7e3fc' }"
             role="region"
             aria-labelledby="item-title-{{ index }}"
             aria-describedby="item-description-{{ index }}">
          <div class="info">
            <div class="title" id="item-title-{{ index }}" aria-live="polite">{{ item.title }}</div>
            <div class="description" id="item-description-{{ index }}" aria-live="polite">{{ item.description }}</div>
          </div>
      
          <iframe 
            v-if="item.video" 
            class="video-player" 
            :src="item.video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            aria-label="Video del blog">
          </iframe>
          <div v-else class="play-icon" aria-label="Reproducir video">▶️</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Apoyo 1',
          description: 'Descripción breve de blog 1',
          video: 'https://www.youtube.com/embed/0mSNnobHcYQ',
          backgroundColor: '#d7e3fc',
        },
        {
          title: 'Apoyo 2',
          description: 'Descripción breve de blog 2',
          video: 'https://www.youtube.com/embed/VIDEO_ID_2',
          backgroundColor: '#f0e1f1',
        },
        {
          title: 'Apoyo 3',
          description: 'Descripción breve de blog 3',
          video: 'https://www.youtube.com/embed/VIDEO_ID_3',
          backgroundColor: '#e0f0ff',
        },
        {
          title: 'Apoyo 4',
          description: 'Descripción breve de blog 4',
          video: 'https://www.youtube.com/embed/VIDEO_ID_4',
          backgroundColor: '#f0d7d7',
        },
        {
          title: 'Apoyo 5',
          description: 'Descripción breve de blog 5',
          video: 'https://www.youtube.com/embed/VIDEO_ID_5',
          backgroundColor: '#e3f7d7',
        },
        {
          title: 'Apoyo 6',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae deserunt maiores eligendi temporibus saepe esse voluptas facilis ipsum aut. A, temporibus saepe? Ad sapiente reprehenderit commodi consequatur numquam reiciendis error.',
          video: 'https://www.youtube.com/embed/VIDEO_ID_6',
          backgroundColor: '#e0f0ff',
        }
      ]
    };
  }
}
</script>

<style scoped>
.container {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.header {
  font-size: 48px;
  font-weight: bold;
  color: #4a4a8f;
  margin-bottom: 20px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.apoyo-card {
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  color: #000;
  font-family: Arial, sans-serif;
  justify-content: space-between;
}

.description {
  font-size: 16px;
  color: #333;
  margin-top: 5px;
  white-space: normal;
  word-wrap: break-word;
  max-height: 100px; 
  overflow-y: auto; 
  padding-right: 10px; 
  border-radius: 10px; 
  padding: 10px; 
  transition: all 0.3s ease;
}

.description::-webkit-scrollbar {
  width: 8px;
}

.description::-webkit-scrollbar-track {
  border-radius: 10px;
}

.description::-webkit-scrollbar-thumb {
  background-color: #7f7f7f;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
}

.description::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  background-color: white;
  border-radius: 7px;
  width: 50%;
  font-weight: bold;
  font-size: large;
  margin-bottom: 20px;
}

.video-player {
  width: 45%;
  height: 100%;
  border-radius: 10px;
  margin-left: 20px;
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
