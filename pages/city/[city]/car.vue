<script setup lang="ts">
import Cards from "~/component/Car/Cards.vue";

const route = useRoute()
useHead({
  title:`${route.params.make ? route.params.make.toUpperCase() : 'Cars'} in ${route.params.city.toUpperCase()} `
})

import NavBar from "~/component/NavBar.vue";
import SideBar from "~/component/Car/SideBar.vue";
</script>

<template>
  <div>
    <div
        class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-5 d-flex">
        <SideBar/>
        <NuxtPage/>
      </div>
    </div>

  </div>
</template>
