<template>
    <h2>Search by Letter</h2>
    <div class="flex gap-2 mt-2">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter of letters" 
        :key="letter">
            {{ letter }}
        </router-link>
    </div>
</template>

<script lang="ts" setup>

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

</script>
  
  
