<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";

const gameStore = useAssociationsStore();

let currentWord = ref("");

function wordAdded() {
  gameStore.addWord(currentWord.value.trim());
  currentWord.value = "";
  if (gameStore.currentPlayersWordsCount == gameStore.wordsPerPlayer) {
    if (gameStore.totalPlayers == gameStore.playerCount) {
      gameStore.saveCurrentPlayersWords();
      router.push({ name: "Countdown" });
    } else {
      gameStore.nextPlayer();
      router.push({ name: "AddPlayer" });
    }
  }
}
</script>

<template>
  <form class="nickname-div" @submit.prevent="wordAdded">
    <label class="nickname-label" for="word"
      >Brainstorm an interesting word</label
    >
    <input
      class="nickname-input"
      @focusout="focusOutInput"
      v-model="currentWord"
      type="text"
      placeholder="and enter it here"
      id="word"
      required
    />
    <button type="submit" class="rounded-button nickname-button">
      Remember my word's'
    </button>
  </form>

  <h1 class="title word-count">
    Word {{ gameStore.currentPlayersWordsCount + 1 }} /
    {{ gameStore.wordsPerPlayer }}
  </h1>
</template>
