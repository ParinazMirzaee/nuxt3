<script setup>

import NavBar from "~/component/NavBar.vue";
</script>

<template>
  <div>
    <NavBar/>
    <div class="mx-auto mt-4 px-4 pb-3 w-75">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>