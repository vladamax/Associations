<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";

const ASSOCIATIONS_STORE = useAssociationsStore();

let currentWord = ref("");

function wordAdded() {
  ASSOCIATIONS_STORE.addWord(currentWord.value.trim());
  currentWord.value = "";
  if (
    ASSOCIATIONS_STORE.currentPlayersWordsCount ==
    ASSOCIATIONS_STORE.wordsPerPlayer
  ) {
    if (ASSOCIATIONS_STORE.totalPlayers == ASSOCIATIONS_STORE.playerCount) {
      ASSOCIATIONS_STORE.saveCurrentPlayersWords();
      router.push({ name: "Countdown" });
    } else {
      ASSOCIATIONS_STORE.nextPlayer();
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
    Word {{ ASSOCIATIONS_STORE.currentPlayersWordsCount + 1 }} /
    {{ ASSOCIATIONS_STORE.wordsPerPlayer }}
  </h1>
</template>
