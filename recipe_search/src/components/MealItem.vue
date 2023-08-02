<template>
     <div class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
            </router-link>
            <div class="p-3">
              <h3 class="font-bold">{{ meal.strMeal }}</h3>
              <h4 class="font-italic">{{ meal.strArea }}</h4>
              <p class="mb-4">{{ meal.strInstructions.slice(0, 360) }}...</p>
              <div class="flex justify-center gap-5">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <SourceButtton :href="meal.strSource">Source</SourceButtton>
                <router-link to="/" class="px-3 py-2 rounded border-2 border-green-600 hover:bg-green-500 hover:text-white transition-colors">
                  View
                </router-link>
                <button></button>
              </div>
            </div>
          </div>
</template>

<script lang="ts">
import { Meal } from '../types/types';
import SourceButtton from './SourceButtton.vue';
import YouTubeButton from './YouTubeButton.vue';

export default {
    props: {
        meal: {
            type: Object as () => Meal,
            required: true,
        },
    },
    components: { YouTubeButton, SourceButtton }
};
</script>