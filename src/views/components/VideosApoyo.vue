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
          title: 'Depresión',
          description: 'Sentimientos persistentes de tristeza y pérdida de interés.',
          video: 'https://www.youtube.com/embed/WIb4B79B9zQ',
          backgroundColor: '#d7e3fc',
        },
        {
          title: 'Trastorno de ansiedad',
          description: 'Condición en la que una persona experimenta preocupaciones excesivas',
          video: 'https://www.youtube.com/embed/11hAfpDfE78',
          backgroundColor: '#f0e1f1',
        },
        {
          title: 'Esquizofrenia',
          description: 'Trastorno mental grave que afecta la percepción de la realidad, causando alucinaciones y pensamientos desorganizados.',
          video: 'https://www.youtube.com/embed/ZPS5WxntgYM',
          backgroundColor: '#e0f0ff',
        },
        {
          title: 'Trastorno obsesivo-compulsivo',
          description: 'Condición en la que una persona tiene pensamientos intrusivos y recurrentes seguidos de comportamientos repetitivos para aliviar la ansiedad.',
          video: 'https://www.youtube.com/embed/Mf_mRF6M_Jk',
          backgroundColor: '#f0d7d7',
        },
        {
          title: 'Trastorno bipolar',
          description: 'Trastorno del estado de ánimo que causa cambios extremos entre períodos de manía (euforia) y depresión profunda',
          video: 'https://www.youtube.com/embed/3QykthLD8mU',
          backgroundColor: '#e3f7d7',
        },
        {
          title: 'Anorexia nerviosa',
          description: 'Trastorno alimentario caracterizado por una restricción extrema de la ingesta de alimentos y un temor intenso a ganar peso',
          video: 'https://www.youtube.com/embed/ybHfgSlziNc',
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
  text-align: center;
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
  flex-direction: row;
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
  padding-top: 0;
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
  width: auto;
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

/* Media Queries */

/* Tablets (768px o menos) */
@media screen and (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
  
  .apoyo-card {
    flex-direction: column;
    height: auto;
  }

  .video-player,
  .play-icon {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: 10px;
  }

  .title {
    width: 100%;
  }
}

/* Smartphones (480px o menos) */
@media screen and (max-width: 480px) {
  .header {
    font-size: 32px;
  }

  .apoyo-card {
    padding: 10px;
  }

  .title {
    font-size: medium;
    margin-bottom: 10px;
  }

  .description {
    font-size: 14px;
    padding: 5px;
  }
}
</style>
