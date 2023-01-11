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

  function getWinnerString(winners) {
    if (winners.length == 1) {
      return [`The winners are ${winners[0][0]} and ${winners[0][1]}`];
    } else {
      return [...winners];
    }
  }

  let winner = reactive([]);

  function gameOver() {
    let winnerTeams = [];
    let highest = 0;

    score.map(function (value, index) {
      if (value.score > highest) {
        highest = value.score;
        if (winnerTeams.length == 0) {
          winnerTeams.push([value.player1, value.player2]);
        } else {
          winnerTeams.splice(0, winnerTeams.length, [
            value.player1,
            value.player2,
          ]);
        }
      } else if (value.score == highest) {
        winnerTeams.push([value.player1, value.player2]);
      }
    });
    winner.push(highest, ...getWinnerString(winnerTeams));
    router.push({ name: "gameOver" });
  }

  return {
    winner,
    score,
    currentPhaseWords,
    phases,
    gamePrepare,
    nextPhase,
    gameOver,
  };
});
