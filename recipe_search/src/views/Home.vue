<template>
    <div class="flex flex-col p-8 items-center justify-center">
        <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."/>
        <div class="flex gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="(letter, index) of letters" :key={index}>{{ letter }}</router-link>
        </div>
        <!-- <pre>{{ ingredients }}</pre> -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])

onMounted( async () => {
    const response = await axiosClient.get('list.php?i=list')
    ingredients.value = response.data
})

</script>

<style>

</style>