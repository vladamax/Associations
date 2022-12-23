<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";

const GAMESTORE = useAssociationsStore();

let currentWord = ref("");

function wordAdded() {
  GAMESTORE.addWord(currentWord.value.trim());
  currentWord.value = "";
  if (GAMESTORE.currentPlayersWordsCount == GAMESTORE.wordsPerPlayer) {
    if (GAMESTORE.totalPlayers == GAMESTORE.playerCount) {
      GAMESTORE.saveCurrentPlayersWords();
      router.push({ name: "Countdown" });
    } else {
      GAMESTORE.nextPlayer();
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
      required
    />
    <button type="submit" class="rounded-button nickname-button center-items">
      Remember my words
    </button>
  </form>

  <h1 class="title word-count">
    Word {{ GAMESTORE.currentPlayersWordsCount + 1 }} /
    {{ GAMESTORE.wordsPerPlayer }}
  </h1>
</template>
