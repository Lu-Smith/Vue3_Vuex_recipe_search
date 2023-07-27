<template>
    <div class="bg-gray-100 h-full">
        <header class="bg-white shadow h-16 flex justify-between item-center">
            <router-link :to="{name: 'home'}">
                Home
            </router-link>
            <div class="flex item-center gap-1">
                <router-link :to="{name: 'home'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">
                    Search meals
                </router-link>
                <router-link :to="{name: 'home'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">
                    by letter
                </router-link>
                <router-link :to="{name: 'home'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200">
                    by ingredient
                </router-link>
            </div>

        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
