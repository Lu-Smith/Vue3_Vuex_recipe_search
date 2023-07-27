<template>
  <div class="p-8">
    <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."
        @change="searchMeals"/>
        <div>
          <pre>
            {{ meals }}
          </pre>
        </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import store from '../store/index.js';

  const keyword = ref('')
  const meals = computed(() => store.state.searchedMeals)

  function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
  }

</script>

<style>

</style>