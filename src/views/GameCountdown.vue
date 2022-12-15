<script setup>
import { watch, ref } from 'vue';
import router from '../router';

let countdown = ref(3);

    watch(countdown, function () {
        if(countdown.value>1)
        {
            setTimeout(function () {
                countdown.value--;
            },1000);
        }
        else
        {
            setTimeout(function () {
                countdown.value='kjuras :)';
                setTimeout(function () {
                    router.push({ name: 'Game' });
                },2000);
            },1000);

        }
    },{immediate:true})

</script>

<template>
    <div class="countdown">
        <div class="word-count">
                <h1>The game is about to begin in <br/>{{ countdown }}</h1>
        </div>
    </div>
</template>