<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { useGameStore } from "../stores/gameStore";
import { ref, reactive, watch } from "vue";

const GAME_STORE = useGameStore();

GAME_STORE.gamePrepare();

let nextWordIndex = ref(GAME_STORE.currentPhaseWords.length - 3);
let firstWordIndex = ref(nextWordIndex.value + 2);
let secondWordIndex = ref(nextWordIndex.value + 1);

let currentTeam = ref(0);
let currentPhase = ref(0);

let myInterval;
let countdown = ref(0);
let timerOn = ref(false);

function guessed(flag) {
  GAME_STORE.score[currentTeam.value].score++;
  if (flag == 1) {
    firstWordIndex.value = nextWordIndex.value;
  } else {
    secondWordIndex.value = nextWordIndex.value;
  }
  if (nextWordIndex.value == -2) {
    currentPhase.value++;
    stopTheTime(false);
    GAME_STORE.nextPhase();
    resetIndexes();
  } else {
    nextWordIndex.value--;
  }
}

function startGame() {
  if (countdown.value <= 0) {
    countdown.value = 10;
  }
  timerOn.value = true;
  myInterval = setInterval(timer, 1000);
}

function timer() {
  if (countdown.value > 0) {
    countdown.value--;
  } else {
    clearInterval(myInterval);
    timerOn.value = false;
  }
}

function stopTheTime(flag = true) {
    clearInterval(myInterval);
    timerOn.value = false;
  if (flag) {
    countdown.value=0;
  }
}

function resetIndexes() {
  nextWordIndex.value = GAME_STORE.currentPhaseWords.length - 3;
  firstWordIndex.value = nextWordIndex.value + 2;
  secondWordIndex.value = nextWordIndex.value + 1;
}

watch(timerOn, function () {
  if (timerOn.value == false && countdown.value == 0) {
      if (currentTeam.value == GAME_STORE.score.length - 1)
        currentTeam.value = 0;
      else currentTeam.value++;
    }
});
</script>

<template>
  <ul class="gameplay">
    <li v-for="team in GAME_STORE.score">
      <h3>{{ team.player1 }}</h3>
      <h1>{{ team.score }}</h1>
      <h3>{{ team.player2 }}</h3>
    </li>
  </ul>

  <button v-show="!timerOn" @click="startGame">Start the time</button>

  <div v-show="timerOn">
    <button v-show="firstWordIndex >= 0" @click="guessed(1)">
      {{ GAME_STORE.currentPhaseWords[firstWordIndex] }}
    </button>

    <button v-show="secondWordIndex >= 0" @click="guessed">
      {{ GAME_STORE.currentPhaseWords[secondWordIndex] }}
    </button>

    <h1>{{ countdown }}</h1>

    <button @click="stopTheTime">Stop the time</button>
  </div>
</template>
