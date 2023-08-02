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
const meals = computed(() => store.state.searchedMealsByLetter);

function searchMealsByLetter() {
    store.dispatch('searchMealsByLetter', route.params.letter)
  }

onMounted(() => {
    const letter = route.params.letter
    console.log(letter)
    if(letter){
        searchMealsByLetter()
    }
})

</script>
  
  
