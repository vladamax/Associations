<script setup>
import { useGameStore } from "../stores/gameStore";

const GAME_STORE = useGameStore();
</script>

<template>
      <div class="finalResult">
        The final result
    </div>
  <ul class="gameplay">
    <li v-for="team in GAME_STORE.score">
      <h3>{{ team.player1 }}</h3>
      <h1>{{ team.score }}</h1>
      <h3>{{ team.player2 }}</h3>
    </li>
  </ul>

</template>
