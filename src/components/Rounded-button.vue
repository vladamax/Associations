<script setup>

let props = defineProps({
    'modelValue' : Number,
    'number' : Number
})

</script>

<template>

<button class="rounded-button rwidth"
:class="{
    'chosen': modelValue ==number
}"
@click="$emit('update:modelValue', number)">{{number}}</button>

</template>