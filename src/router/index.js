import { createRouter, createWebHistory } from "vue-router";
import TypeOfGame from "../views/TypeOfGame.vue";
import AddPlayer from "../views/AddPlayer.vue";
import AddWords from "../views/AddWords.vue";
import GameCountdown from "../views/GameCountdown.vue";
import Game from "../views/Game.vue";
import GameOver from "../views/gameOver.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TypeOfGame,
    },

    {
      path: "/AddPlayer",
      name: "AddPlayer",
      component: AddPlayer
    },

    {
      path: "/AddWords",
      name: "AddWords",
      component: AddWords
    },

    {
      path: "/game-countdown",
      name: "Countdown",
      component: GameCountdown
    },

    {
      path: "/game",
      name: "Game",
      component: Game
    },

    {
      path:"/gameOver",
      name:"gameOver",
      component: GameOver
    }

  ],
});

export default router;
