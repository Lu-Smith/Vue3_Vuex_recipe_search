<template>
  <div>
    <div>
        <pre>{{ meal }}</pre>
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        meal.value = data.meals[0] || {}
    })

})


</script>

