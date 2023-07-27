<template>
    <div class="flex flex-col p-8 items-center justify-center">
        <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."/>
        <div class="flex gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="(letter, index) of letters" :key={index}>{{ letter }}</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "../store"


const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

</script>

<style>

</style>