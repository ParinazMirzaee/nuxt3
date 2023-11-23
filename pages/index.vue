<script setup lang="ts">
useHead({
  title: "cartrader",
});

import NavBar from "~/component/NavBar.vue";
import Hero from "~/component/Car/Hero.vue";

</script>

<template>
  <div class="">
    <NuxtLayout name="default">
      <Hero/>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>