import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import swal from "sweetalert2";

export const useAssociationsStore = defineStore("Associations", () => {

  let totalPlayers = ref();
  let wordsPerPlayer = ref();

  let players = reactive([]);
  let words = reactive([]);

  let currentPlayersWords = reactive([]);

  const playerCount = computed(() => players.length);

  const currentPlayersWordsCount = computed(
    () => currentPlayersWords.length
  );

  function addPlayer(player) {
    if(players.includes(player))
    {
      return false;
    }
    else
    {
      players.push(player);
      return true;
    }
  }

  function addWord(word) {
    currentPlayersWords.push(word);
  }

  function saveCurrentPlayersWords() {
    words.push(...currentPlayersWords);
  }

  function nextPlayer() {
    saveCurrentPlayersWords();
    currentPlayersWords.splice(0,wordsPerPlayer.value);
  }

  const Toast = swal.mixin({
    icon: "success",
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 2500,
  });

  return {
    words,
    players,
    playerCount,
    currentPlayersWordsCount,
    totalPlayers,
    wordsPerPlayer,
    currentPlayersWords,
    addPlayer,
    addWord,
    nextPlayer,
    saveCurrentPlayersWords,
    Toast
  };
});