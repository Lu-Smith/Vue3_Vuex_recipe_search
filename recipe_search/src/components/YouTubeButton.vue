<template>
   <a 
   :href="href" 
   target="_blank" 
   class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 hover:text-white transition-colors" >
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
