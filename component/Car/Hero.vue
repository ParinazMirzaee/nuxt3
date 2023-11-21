<template>
  <div>
    <img class="relative w-100" src="https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg" alt="">

    <div class="absolute z-3 top-0 w-100">
      <div class=" d-flex justify-content-center align-items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
          <SearchBar />
        </div>
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchBar from "~/component/Car/SearchBar.vue";
</script>

<style scoped>

</style>