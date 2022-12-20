<script setup>
import { useAssociationsStore } from "../stores/associationsStore";
import { ref } from "vue";
import router from "../router";
import swal from "sweetalert2";

//swal('Nickname','Already in use','error');

const associationsStore = useAssociationsStore();
//associationsStore.Toast.fire({
     //title: "bravo care"
//})
let nickName = ref("");

function inputDone() {
  if (associationsStore.addPlayer(nickName.value.trim())) {
    //swal("Uspeh", "pizdo jedna", "danger");
    router.push({ name: "AddWords" });
  } else {
   // swal("Nickname", "Already in use", "error");
  }
}
</script>

<template>
  <form class="nickname-div" @submit.prevent="inputDone">
    <label class="nickname-label player-number" for="nickName"
      >Player Number {{ associationsStore.playerCount + 1 }}</label
    >
    <label class="nickname-label" for="nickName">Also known as</label>
    <input
      class="nickname-input "
      v-model="nickName"
      type="text"
      placeholder="your nickname here"
      id="nickName"
      required
    />
    <button type="submit" class="rounded-button nickname-button">
      That's me :)
    </button>
  </form>

  <h1>
    TODO <br />
    - Page/Alert for "Ready for the Next Phase?"
    - Const must be capital letter <br/>
    - Add list of currently signed players to this page<br />
    - Check if there is an existing player with the same name.<br />
    - What happens if the user clicks the back button?<br />
    - GameCountdown - Kjuras optimization? - Move gameStarting function to
    GameCountdown - Watchers izvuci ih u composable?
    - ! Last Thing ! : // https://vitejs.dev/config/
  </h1>
</template>
