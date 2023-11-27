<script setup>
import Card from "~/component/Car/Card.vue";

const props = defineProps({
  cars: Array
})
const favourite = useLocalStorage("favourite", {});
const handleFavourite = (id) => {
  if (id in favourite.value) {
    delete favourite.value[id];
  } else {
    favourite.value = {
      ...favourite.value,
      [id]: true,
    };
  }
}
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <Card v-for="car in cars"
            :key="car.id"
            :car="car"
            @favor="handleFavourite"
            :favored="car.id in favourite"
      />
    </ClientOnly>
  </div>
</template>
