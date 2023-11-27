<script setup>
import Cards from "~/component/Car/Cards.vue";

const route = useRoute();
const cars = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
</script>

<template>
  <div>
    <Cards :cars="cars"/>
  </div>
</template>
