<template>
    <div class="location-widget">
      <h2 class="widget-title">Your Location</h2>
      <div v-if="latitude && longitude" class="location-info">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>
      <div v-else class="location-info">
        <p class="loading-message">Finding your location...</p>
      </div>
  
      <div class="location-input">
        <label for="latitude" class="input-label">Latitude:</label>
        <input type="text" id="latitude" v-model="inputLatitude" class="input-field" />
      </div>
      <div class="location-input">
        <label for="longitude" class="input-label">Longitude:</label>
        <input type="text" id="longitude" v-model="inputLongitude" class="input-field" />
      </div>
  
      <button class="location-btn" @click="fetchLocationDetails" :disabled="status === 'loading'">
        <span v-if="status === 'loading'" class="btn-text loading-text">Loading...</span>
        <span v-else class="btn-text">Find Location Details</span>
      </button>
  
      <div v-if="foundLocation" class="location-details">
        <h3 class="details-title">Location Details</h3>
        <p>{{ foundLocation.components.country }}</p>
        <p>{{ foundLocation.components.city }}</p>
        <p>{{ foundLocation.components.street }}</p>
        <p>Postal Code: {{ foundLocation.components.postcode }}</p>
      </div>
    </div>
  </template>
  
  <style>
  .location-widget {
    background-color: #f2f2f2;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }
  
  .widget-title {
    color: #6b317f;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .location-info {
    margin-bottom: 10px;
  }
  
  .loading-message {
    color: #6b317f;
    font-style: italic;
  }
  
  .location-input {
    margin-bottom: 10px;
  }
  
  .input-label {
    color: #6b317f;
    display: block;
    margin-bottom: 5px;
  }
  
  .input-field {
    background-color: #dbbcd8;
    border: none;
    border-radius: 4px;
    padding: 8px;
    width: 80%;
  }
  
  .location-btn {
    background-color: #6b317f;
    border: none;
    border-radius: 4px;
    color: #f2f2f2;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: background-color 0.3s;
  }
  
  .location-btn:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
  
  .btn-text {
    color: #f2f2f2;
  }
  
  .loading-text {
    font-style: italic;
  }
  
  .location-details {
    margin-top: 20px;
  }
  
  .details-title {
    color: #6b317f;
    font-size: 20px;
    margin-bottom: 10px;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
        inputLatitude: '',
        inputLongitude: '',
        foundLocation: null,
      };
    },
    mounted() {
      if (navigator.gelokasi) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },
    methods: {
      getPosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      async fetchLocationDetails() {
        try {
          const apiKey = '92591005a7b94008909d59a64b6d2a49';
          const latitude = this.inputLatitude || this.latitude;
          const longitude = this.inputLongitude || this.longitude;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            latitude + ',' + longitude
          )}&key=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (data.results && data.results.length > 0) {
            const location = data.results[0];
            this.foundLocation = location;
            console.log('Location:', location);
            // Lakukan sesuatu dengan data lokasi yang ditemukan
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      },
    },
  };
  </script>