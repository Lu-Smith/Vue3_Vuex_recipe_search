<template>
    <div class="bg-gray-100 h-full">
        <header class="bg-white shadow h-16">
            <router-link :to="{name: 'home'}">
                Home
            </router-link>
            <div>
                <router-link :to="{name: 'home'}">
                    Search meals
                </router-link>
                <router-link :to="{name: 'home'}">
                    by letter
                </router-link>
                <router-link :to="{name: 'home'}">
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
