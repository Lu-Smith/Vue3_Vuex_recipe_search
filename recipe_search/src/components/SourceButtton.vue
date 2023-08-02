<template>
    <a 
    :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border-2 border-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
     <slot></slot>
    </a>
 </template>
 
 <script lang="ts">
 
 export default {
   props: {
     href: String,
   },
 };
 
 </script>