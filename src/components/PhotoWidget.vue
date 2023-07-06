<template>
  <div class="photo-widget">
    <h2>{{ title }}</h2>
    <div class="photo-container">
      <img :src="photoUrl" :alt="title" />
    </div>
    <button @click="getRandomPhoto" class="load-button">Load New Photo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38037020-2c48722c03be8437a05b588e6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];

        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>
.photo-widget {
  text-align: center;
}

.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
}

img:hover {
  transform: scale(1.05);
}

img.enlarged {
  transform: scale(1.2);
  z-index: 999;
  position: relative;
}

.loading-indicator {
  margin-top: 20px;
  font-size: 16px;
  color: #ffffff;
}

button {
  margin-top: 15px;
  margin-bottom: 13px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6b317f;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

