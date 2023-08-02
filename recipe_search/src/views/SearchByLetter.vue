<template>
    <h2>Search by Letter</h2>
    <div class="flex gap-2 mt-2">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter of letters" 
        :key="letter">
            {{ letter }}
        </router-link>
        <div>
            <pre>{{ meals }}</pre>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from '../store/index.js';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
    store.dispatch('mealsByLetter', route.params.letter)
})

</script>
  
  
