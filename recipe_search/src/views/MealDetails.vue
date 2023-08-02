<template>
  <div>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-3xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full max-w-[350px] mx-auto" >
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong>Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul>
                <template v-for="index in 20" :key="index">
                    <li v-if="meal[`strIngredient${index}`]">
                        <span class="text-orange-800 italic">{{ index}}.</span> <strong>{{ meal[`strMeasure${index}`] }} - {{ meal[`strIngredient${index}`] }}</strong>
                    </li>
               </template>
            </ul>
        </div>
    </div>
    <div>
        <YouTubeButton :href="meal.strYouTube">YouTube</YouTubeButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
import { Meal } from '../types/types';

const route = useRoute()
const meal = ref<Meal>({
    idMeal: '',
  strMeal: '',
  strCategory: '',
  strArea: '',
  strMealThumb: '',
  strYouTube: '',
  strTags: '',
  strInstructions: '',
  strIngredient1: '',
  strIngredient2: '',
  strIngredient3: '',
  strIngredient4: '',
  strIngredient5: '',
  strIngredient6: '',
  strIngredient7: '',
  strIngredient8: '',
  strIngredient9: '',
  strIngredient10: '',
  strIngredient11: '',
  strIngredient12: '',
  strIngredient13: '',
  strIngredient14: '',
  strIngredient15: '',
  strIngredient16: '',
  strIngredient17: '',
  strIngredient18: '',
  strIngredient19: '',
  strIngredient20: '',
  strMeasure1: '',
  strMeasure2: '',
  strMeasure3: '',
  strMeasure4: '',
  strMeasure5: '',
  strMeasure6: '',
  strMeasure7: '',
  strMeasure8: '',
  strSource: '',
})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        meal.value = data.meals[0] || {}
    })

})


</script>

