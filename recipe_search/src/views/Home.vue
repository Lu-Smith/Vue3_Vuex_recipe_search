<template>
    <div class="flex p-8 justify-center">
        <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."/>
        <div class="flex gap-1">
            <pre>{{ letters }}</pre>
            <router-link>{{ letter }}</router-link>
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