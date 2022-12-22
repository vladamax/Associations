<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";
import swal from "sweetalert2";

const ASSOCIATIONS_STORE = useAssociationsStore();

let nickName = ref("");

function inputDone() {
  if (ASSOCIATIONS_STORE.addPlayer(nickName.value.trim())) {
    router.push({ name: "AddWords" });
  } else {
   swal.fire("Nickname", "Already in use", "error");
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
