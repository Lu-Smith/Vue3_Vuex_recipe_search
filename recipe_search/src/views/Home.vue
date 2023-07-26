<template>
    <div>
        <h2>Home</h2>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "../store"


const meals = computed(() => store.state.meals)

</script>

<style>

</style>