<template>
    <div class="container">
      <h1 class="title">Scramble Word</h1>
      <h3 class="subtitle">(Fruits Edition)</h3>
      <p class="word">{{ scrambledWord }}</p>
      <input type="text" v-model="guess" :disabled="gameOver" class="input">
      <button @click="checkGuess" :disabled="gameOver" class="button">Submit</button>
      <p v-if="gameOver" class="result">{{ resultMessage }}</p>
      <button @click="resetGame" class="button reset">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        wordList: ["apple", "orange", "banana", "mango", "grape"],
        targetWord: "",
        scrambledWord: "",
        guess: "",
        gameOver: false,
        resultMessage: ""
      };
    },
    created() {
      this.startGame();
    },
    methods: {
      startGame() {
        const randomIndex = Math.floor(Math.random() * this.wordList.length);
        this.targetWord = this.wordList[randomIndex];
        this.scrambledWord = this.scrambleWord(this.targetWord);
        this.guess = "";
        this.gameOver = false;
        this.resultMessage = "";
      },
      scrambleWord(word) {
        const shuffledWord = word.split("").sort(() => Math.random() - 0.5);
        return shuffledWord.join("");
      },
      checkGuess() {
        if (this.guess.toLowerCase() === this.targetWord.toLowerCase()) {
          this.gameOver = true;
          this.resultMessage = "You guessed the word right!";
        } else {
          this.resultMessage = "Try Again!";
        }
      },
      resetGame() {
        this.startGame();
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vhvh;
    width: 60vh;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #6b317f;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .word {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .input {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #dbbcd8;
   width: 75%;
  }
  
  .button {
    padding: 10px 20px;
    background-color: #6b317f;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #8b4ba6;
  }
  
  .button:disabled {
    background-color: #b98ab4;
    cursor: not-allowed;
  }
  
  .result {
    font-size: 18px;
    margin-top: 20px;
  }
  
  .reset {
    background-color: #6b317f;
    margin-top: 10px;
  }
  
  .reset:hover {
    background-color: #b98ab4;
  }
  </style>
  