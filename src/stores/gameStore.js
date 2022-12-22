import { useShuffle } from "../composables/useShuffle.js";
import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { useAssociationsStore } from "./associationsStore.js";

export const useGameStore = defineStore("Game", () => {
  const ASSOCIATIONS_STORE = useAssociationsStore();

  let shuffle = useShuffle();

  let score = reactive([]);
  let currentPhaseWords = reactive([]);

  function nextPhase() {
    currentPhaseWords.splice(
      0,
      currentPhaseWords.length,
      ...shuffleWords(ASSOCIATIONS_STORE.words)
    );
  }

  function nextTeam() {

  }

  function gamePrepare() {
    scoreTable();
    currentPhaseWords.push(...shuffleWords(ASSOCIATIONS_STORE.words));
  }

  function scoreTable() {
    const players = shuffle.shuffle(ASSOCIATIONS_STORE.players);
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
