<script setup>
import { ref, watch } from "vue";
import RoundedButton from "../components/Rounded-button.vue";
import { useAssociationsStore } from "../stores/associationsStore";

const ASSOCIATIONS_STORE = useAssociationsStore();

let players = ref(0);
let wordsPerPlayer = ref(0);
let areBothOptionsChoosed = ref(false);

watch([wordsPerPlayer, players], function () {
  if (players.value != 0 && wordsPerPlayer.value != 0) {
    areBothOptionsChoosed = true;
    ASSOCIATIONS_STORE.setTheGameType(players.value, wordsPerPlayer.value);
  }
});
</script>

<template>
  <h1 class="title">Players</h1>
  <div class="flex-box">
    <RoundedButton :number="4" v-model="players" />
    <RoundedButton :number="6" v-model="players" />
    <RoundedButton :number="8" v-model="players" />
    <RoundedButton :number="10" v-model="players" />
  </div>

  <h1 class="title">Words per player</h1>
  <div class="flex-box">
    <RoundedButton :number="3" v-model="wordsPerPlayer" />
    <RoundedButton :number="4" v-model="wordsPerPlayer" />
    <RoundedButton :number="5" v-model="wordsPerPlayer" />
    <RoundedButton :number="6" v-model="wordsPerPlayer" />
    <RoundedButton :number="7" v-model="wordsPerPlayer" />
    <RoundedButton :number="8" v-model="wordsPerPlayer" />
    <RoundedButton :number="9" v-model="wordsPerPlayer" />
    <RoundedButton :number="10" v-model="wordsPerPlayer" />
  </div>

  <div class="center-items">
    <RouterLink :to="{ name: 'AddPlayer' }" :active="!areBothOptionsChoosed">
      <button :disabled="!areBothOptionsChoosed" class="continue-button">
        Start Brainstorming
      </button>
    </RouterLink>
  </div>
</template>
