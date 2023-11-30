<script setup>
import Detail from "~/component/Car/Details/Detail.vue";
import Attributes from "~/component/Car/Details/Attributes.vue";
import Description from "~/component/Car/Details/Description.vue";
import Contact from "~/component/Car/Details/Contact.vue";
import useFetchCar from "~/composables/useFetchCar.js";

const route = useRoute();
const {data: car} = await useFetchCar(route.params.id);

useHead({
  title: route.params.name.toUpperCase()
});



</script>

<template>
  <NuxtLayout name="custom">
    <div v-if="car">
      <Detail :car="car"/>
      <Attributes :features="car.features"/>
      <Description :description="car.description"/>
      <Contact/>
    </div>
  </NuxtLayout>
</template>
