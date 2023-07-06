<template>
    <div class="stopwatch-widget">
      <h2 class="widget-title">Stopwatch Widget</h2>
      <p class="time-display">{{ formatTime }}</p>
      <div class="button-container">
        <button class="start-btn btn" @click="start" :disabled="interval">Start</button>
        <button class="stop-btn btn" @click="stop" :disabled="!interval">Stop</button>
        <button class="reset-btn btn" @click="reset">Reset</button>
      </div>
    </div>
  </template>
  
  <style>
  .stopwatch-widget {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }
  
  .widget-title {
    color: #6b317f;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .time-display {
    color: #6b317f;
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    background-color: #6b317f;
    border: none;
    border-radius: 4px;
    color: #f5f5f5;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
    transition: background-color 0.3s;
  }
  
  .btn:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        time: 0,
        interval: null,
      };
    },
    computed: {
      formatTime() {
        let milliseconds = this.time % 1000;
        let seconds = Math.floor((this.time / 1000) % 60);
        let minutes = Math.floor((this.time / (1000 * 60)) % 60);
        let hours = Math.floor(this.time / (1000 * 60 * 60));
  
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
          .toString()
          .padStart(3, '0')}`;
      },
    },
    methods: {
      start() {
        if (!this.interval) {
          this.interval = setInterval(() => {
            this.time += 10;
          }, 10);
        }
      },
      stop() {
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
      },
      reset() {
        this.time = 0;
        clearInterval(this.interval);
        this.interval = null;
      },
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
  };
  </script>
  