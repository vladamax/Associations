import { useShuffle } from "../composables/useShuffle.js";
import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { useAssociationsStore } from "./associationsStore.js";

export const useGameStore = defineStore("Game", () => {
  const associationsStore = useAssociationsStore();

  let shuffle = useShuffle();

  let score = reactive([]);
  let currentPhaseWords = reactive([]);

  function nextPhase() {
    currentPhaseWords.splice(0,currentPhaseWords.length,...shuffleWords(associationsStore.words));
  }

  function nextTeam() {

  }

  function gamePrepare() {
    scoreTable();
    currentPhaseWords.push(...shuffleWords(associationsStore.words));
  }

  function scoreTable() {
    const players = shuffle.shuffle(associationsStore.players);
    for (var i = 0; i < players.length; ) {
      score.push({
        player1: players[i],
        player2: players[i + 1],
        score: 0,
      });
      i += 2;
    }
  }

  function shuffleWords(words) {
    return shuffle.shuffle(words);
  }

  return {
    score,
    currentPhaseWords,
    gamePrepare,
    nextTeam,
    nextPhase
  };
});
