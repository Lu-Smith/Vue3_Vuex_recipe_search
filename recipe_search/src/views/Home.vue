<template>
    <div class="flex p-8 justify-center">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"/>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "../store"


const meals = computed(() => store.state.meals)

</script>

<style>

</style>