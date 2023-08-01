<template>
  <div class="p-8 pb-0">
    <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."
        @change="searchMeals"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
          <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link to="/">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
            </router-link>
            <div class="p-3">
              <h3 class="font-bold">{{ meal.strMeal }}</h3>
              <h4 class="font-italic">{{ meal.strArea }}</h4>
              <p class="mb-4">{{ meal.strInstructions.slice(0, 360) }}...</p>
              <div class="flex justify-center gap-5">
                <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 hover:text-white transition-colors" >YouTube</a>
                <a :href="meal.strSource" target="_blank" class="px-3 py-2 rounded border-2 border-orange-600 hover:bg-orange-500 hover:text-white transition-colors">Source</a>
                <router-link to="/" class="px-3 py-2 rounded border-2 border-green-600 hover:bg-green-500 hover:text-white transition-colors">
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
  import { ref, onMounted } from 'vue';
  import { computed } from '@vue/reactivity'
  import { useRoute } from 'vue-router';
  import store from '../store/index.js';

  const route = useRoute()
  const keyword = ref('')
  const meals = computed(() => store.state.searchedMeals)

  

  function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
  }

  onMounted(() => {
    keyword.value = route.params.name as string
    if (keyword.value) {
      searchMeals()
    }
  })

</script>

<style>

</style>