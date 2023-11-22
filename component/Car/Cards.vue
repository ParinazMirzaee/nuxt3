<script setup lang="ts">
import Card from "~/component/Car/Card.vue";

const {cars} = useCars()
</script>

<template>
  <div class="w-full">
    <Card v-for="car in cars" :key="car.id" :car="car"/>
  </div>
</template>
