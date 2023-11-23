<script setup>

import {useRoute, useRouter} from "#app";
import {useCars} from "~/composables/useCars.js";

const route = useRoute();
const router = useRouter();
console.log(route.query);
const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`
  } else if (minPrice && !maxPrice) {
    return `> $${minPrice}`
  } else {
    return `$${minPrice}-$${maxPrice}`
  }
});
const city = ref("");
const priceRange = ref({
  min: "",
  max: ""
})
const {makes} = useCars();
const modal = ({
  location: false,
  make: false,
  price: false
})
const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}
const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "invalid city format"
    })
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
}

const onChangeMake = (make) => {
  updateModal("make")
  navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onChangePrice = () => {
  updateModal('price');
  if (priceRange.value.max && priceRange.value.min) {
    if (priceRange.value.min > priceRange.value.max) return;
  }
  router.push({
    query:{
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max
    }
  })
}
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!--    LOCATION START-->
    <div class="p-5 d-flex justify-content-between position-relative cursor border-b">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-primary uppercase">
        {{ route.params.city }}
      </h3>
      <div v-if="modal.location" class="position-absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input type="text" class="border p-1 rounded" v-model="city"/>
        <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">
          Apply
        </button>
      </div>
    </div>
    <!--    LOCATION END-->

    <!--MAKE START-->
    <div class="p-5 w-100 d-flex justify-content-between position-relative cursor border-b">
      <h3>Make</h3>
      <h3 class="text-primary" @click="updateModal('make')">
        {{ route.params.make || "Any" }}
      </h3>
      <div class="make position-absolute border shadow w-100 d-flex flex-wrap justify-content-between bg-white"
           v-if="modal.make"
      >
        <h4 v-for="make in makes" :key="make" class="w-50" @click="onChangeMake(make)">
          {{ make }}
        </h4>
      </div>
    </div>
    <!--MAKE END-->

    <!--    PRICE START-->
    <div class="p-5 d-flex justify-content-between position-relative cursor">
      <h3>Price</h3>
      <h3 class="text-primary capitalize" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
          class="p-3 rounded price position-absolute border shadow w-100 d-flex flex-wrap justify-content-between bg-white"
          v-if="modal.price"
      >
        <input class="border p-1 w-100 rounded" type="number" placeholder="Min" v-model="priceRange.min">
        <input class="border p-1 w-100 rounded" type="number" placeholder="Max" v-model="priceRange.max">
        <button class="bg-primary text-white w-100 mt-2 rounded p-1" @click="onChangePrice">
          Apply
        </button>
      </div>
    </div>
    <!--    PRICE END-->
  </div>
</template>
<style scoped>
.make {
  top: 40px;
  z-index: 1;
  left: 370px;
}

.price {
  top: 40px;
  z-index: 1;
  left: 370px;
}
</style>