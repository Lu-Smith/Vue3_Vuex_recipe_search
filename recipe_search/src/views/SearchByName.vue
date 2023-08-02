<template>
  <div class="p-8 pb-0">
    <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals..."
        @change="searchMeals"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
         <MealItem   
          v-for="meal of meals" 
          :key="meal.idMeal" />
        </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { computed } from '@vue/reactivity'
  import { useRoute } from 'vue-router';
  import store from '../store/index.js';
  import MealItem from '../components/MealItem.vue';

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
