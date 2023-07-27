<template>
    <div class="bg-gray-100 h-full">
        <navbar />
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts" setup>
    import Navbar from './Navbar.vue';
</script>
