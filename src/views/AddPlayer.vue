<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";
import { useFlash } from "../composables/useFlash.js"

let { flash } = useFlash();
const ASSOCIATIONS_STORE = useAssociationsStore();

let nickName = ref("");

function inputDone() {
  if (ASSOCIATIONS_STORE.addPlayer(nickName.value.trim())) {
    router.push({ name: "AddWords" });
  } else {
      flash("Nickname", "Already in use", "error");
  }
}
</script>

<template>
  <form class="nickname-div" @submit.prevent="inputDone">
    <label class="nickname-label player-number" for="nickName"
      >Player Number {{ ASSOCIATIONS_STORE.playerCount + 1 }}</label
    >
    <label class="nickname-label" for="nickName">Also known as</label>
    <input
      class="nickname-input "
      v-model="nickName"
      type="text"
      placeholder="your nickname here"
      required
    />
    <button type="submit" class="rounded-button nickname-button">
      That's me :)
    </button>
  </form>
</template>
