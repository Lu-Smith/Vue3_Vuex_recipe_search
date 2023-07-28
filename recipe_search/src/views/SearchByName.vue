<template>
  <div class="p-8">
    <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."
        @change="searchMeals"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
          <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
            
            <div class="px-3">
              <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae incidunt, vel officiis possimus, molestiae cum ut magnam itaque id quidem dolorem neque repellendus facere tempore, asperiores atque. Quia, corporis molestias!</p>
              <div class="p-3">
                <a :href="meal.strYouTube" target="_blank" >YouTube</a>
                <a :href="meal.strSource" target="_blank" >Source</a>
                <router-link to="/">
                  View
                </router-link>
                <button></button>
              </div>
            </div>
          </div>
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