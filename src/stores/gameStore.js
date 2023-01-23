import { useShuffle } from "../composables/useShuffle.js";
import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { useAssociationsStore } from "./associationsStore.js";
import router from "../router/index.js";

export const useGameStore = defineStore("Game", () => {
  const ASSOCIATIONS_STORE = useAssociationsStore();

  let { shuffle } = useShuffle();

  let phases = reactive([
    "as many words as you like",
    "only one word",
    "only pantomime",
  ]);

  let score = reactive([]);
  let currentPhaseWords = reactive([]);

  function nextPhase() {
    currentPhaseWords.splice(
      0,
      currentPhaseWords.length,
      ...shuffleWords(ASSOCIATIONS_STORE.words)
    );
  }

  function gamePrepare() {
    scoreTable();
    currentPhaseWords.push(...shuffleWords(ASSOCIATIONS_STORE.words));
  }

  function scoreTable() {
    if (score.length == 0) {
      const players = shuffle(ASSOCIATIONS_STORE.players);
      for (var i = 0; i < players.length; ) {
        score.push({
          player1: players[i],
          player2: players[i + 1],
          score: 0,
        });
        i += 2;
      }
    }
  }

  function shuffleWords(words) {
    return shuffle(words);
  }


  function gameOver() {
    router.push({ name: "gameOver" });
  }

  return {
    score,
    currentPhaseWords,
    phases,
    gamePrepare,
    nextPhase,
    gameOver
  };
});
