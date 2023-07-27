<template>
  <div class="p-8">
    <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."
        @change="searchMeals"/>
  </div>
</template>

<script lang="ts" setup>
  import axiosClient from '../axiosClient';
  import { ref } from 'vue';

  const keyword = ref('')

  function searchMeals() {
    axiosClient.get(`search.php?s=${keyword}`)
  }

</script>

<style>

</style>