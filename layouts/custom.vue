<script setup lang="ts">

import NavBar from "~/component/NavBar.vue";
</script>

<template>
  <div>
    <NavBar/>
    <div class="mx-auto mt-4 px-4 pb-3 w-100">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>