<template>
  <div>
    <NavBar/>
    <div
        class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-5 d-flex">
        <SideBar/>
        <Card/>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import NavBar from "~/component/NavBar.vue";
import SideBar from "~/component/Car/SideBar.vue";
import Card from "~/component/Car/Card.vue";
</script>