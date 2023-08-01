<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    route.params.id
    
})


</script>

