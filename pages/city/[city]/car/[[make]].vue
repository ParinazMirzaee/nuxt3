<script setup>
import Cards from "~/component/Car/Cards.vue";

const route = useRoute();
const {data: cars, refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(() => route.query, () => {
  window.location.reload(true);
})
</script>

<template>
  <div>
    <Cards v-if="cars.length" :cars="cars"/>
    <h3 class="ms-3 mt-5 text-danger" v-else>No cars found with filters</h3>
  </div>
</template>
