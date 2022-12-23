<script setup>
import { useGameStore } from '../stores/gameStore';

const GAME_STORE = useGameStore();
</script>

<template>
aa
    {{GAME_STORE.winner[0]}}
    Points{{GAME_STORE.winner[1]}}
        

</template>